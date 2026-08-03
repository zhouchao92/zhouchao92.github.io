import requests
import json
import time
import os

# 从 .env 文件中读取 API_KEY
API_KEY= os.getenv('API_KEY')
CHAT_API_URL = 'https://apihub.agnes-ai.com/v1/chat/completions'
IMAGE_API_URL = 'https://apihub.agnes-ai.com/v1/images/generations'
VIDEO_API_URL = 'https://apihub.agnes-ai.com/v1/videos'

"""
文字模型：
  Agnes-2.0-Flash，样例地址：https://agnes-ai.com/doc/agnes-20-flash
图像模型：
  Agnes-Image-2.0-Flash，样例地址：https://agnes-ai.com/doc/image-20-flash
  Agnes-Image-2.1-Flash，样例地址：https://agnes-ai.com/doc/image-21-flash
视频模型：
  Agnes-Video-V2.0 ,样例地址：https://agnes-ai.com/doc/agnes-video-v20

"""


def chat_with_ai(messages, model='agnes-2.0-flash'):
  """
  与 Agnes AI 进行对话

  Args:
      messages: 消息列表,格式为 [{"role": "user", "content": "Hello!"}]
      model: 使用的模型名称,默认为 agnes-2.0-flash

  Returns:
      AI 的回复内容
  """
  headers = {
      "Authorization": f"Bearer {API_KEY}",
      "Content-Type": "application/json"
  }

  payload = {
      "model": model,
      "messages": messages
  }

  try:
    response = requests.post(CHAT_API_URL, headers=headers, json=payload)
    response.raise_for_status()

    result = response.json()

    # 提取 AI 的回复内容
    if 'choices' in result and len(result['choices']) > 0:
      return result['choices'][0]['message']['content']
    else:
      return "未收到有效回复"

  except requests.exceptions.RequestException as e:
    return f"请求失败: {str(e)}"
  except Exception as e:
    return f"发生错误: {str(e)}"


def generate_image(prompt, model='agnes-image-2.0-flash', size='1024x1024', n=1):
  """
  使用 Agnes AI 生成图像

  Args:
      prompt: 图像描述文本
      model: 使用的图像模型,默认为 agnes-image-2.0-flash
      size: 图像尺寸,可选值: 256x256, 512x512, 1024x1024等
      n: 生成图像数量

  Returns:
      生成的图像URL列表
  """
  headers = {
      "Authorization": f"Bearer {API_KEY}",
      "Content-Type": "application/json"
  }

  payload = {
      "model": model,
      "prompt": prompt,
      "size": size,
      "n": n
  }

  try:
    print("正在生成图像...")
    response = requests.post(IMAGE_API_URL, headers=headers, json=payload)
    response.raise_for_status()

    result = response.json()

    # 提取图像URL
    if 'data' in result:
      image_urls = []
      for item in result['data']:
        if 'url' in item:
          image_urls.append(item['url'])
        elif 'b64_json' in item:
          image_urls.append(f"data:image/png;base64,{item['b64_json']}")
      
      if image_urls:
        return image_urls
      else:
        return "未获取到图像数据"
    else:
      return "未收到有效回复"

  except requests.exceptions.RequestException as e:
    return f"请求失败: {str(e)}"
  except Exception as e:
    return f"发生错误: {str(e)}"


def generate_video(prompt, model='agnes-video-v2.0', duration=5):
  """
  使用 Agnes AI 生成视频

  Args:
      prompt: 视频描述文本
      model: 使用的视频模型,默认为 agnes-video-v2.0
      duration: 视频时长(秒)

  Returns:
      生成的视频URL或任务ID
  """
  headers = {
      "Authorization": f"Bearer {API_KEY}",
      "Content-Type": "application/json"
  }

  payload = {
      "model": model,
      "prompt": prompt,
      "duration": duration
  }

  try:
    print("正在提交视频生成任务...")
    response = requests.post(VIDEO_API_URL, headers=headers, json=payload)
    response.raise_for_status()

    result = response.json()

    # 视频生成通常是异步的,返回任务ID
    if 'id' in result:
      task_id = result['id']
      print(f"任务ID: {task_id}")
      print("视频生成中,请稍候查询状态...")
      return task_id
    elif 'data' in result and len(result['data']) > 0:
      # 如果直接返回结果
      video_url = result['data'][0].get('url', '未获取到视频URL')
      return video_url
    else:
      return "未收到有效回复"

  except requests.exceptions.RequestException as e:
    return f"请求失败: {str(e)}"
  except Exception as e:
    return f"发生错误: {str(e)}"


def check_video_status(task_id):
  """
  查询视频生成任务状态

  Args:
      task_id: 任务ID

  Returns:
      任务状态和结果
  """
  headers = {
      "Authorization": f"Bearer {API_KEY}",
      "Content-Type": "application/json"
  }

  try:
    response = requests.get(f"{VIDEO_API_URL}/{task_id}", headers=headers)
    response.raise_for_status()

    result = response.json()
    
    status = result.get('status', 'unknown')
    if status == 'completed':
      video_url = result.get('remixed_from_video_id', '未获取到视频URL')
      return f"视频生成完成! URL: {video_url}"
    elif status == 'processing':
      return "视频仍在生成中..."
    elif status == 'failed':
      return f"视频生成失败: {result.get('error', '未知错误')}"
    else:
      return f"任务状态: {status}"

  except requests.exceptions.RequestException as e:
    return f"请求失败: {str(e)}"
  except Exception as e:
    return f"发生错误: {str(e)}"


def main():
  """主函数 - 交互式对话"""
  print("=" * 50)
  print("Agnes AI 助手")
  print("=" * 50)
  print("功能选择:")
  print("1. 文字对话")
  print("2. 图像生成")
  print("3. 视频生成")
  print("4. 查询视频状态")
  print("输入 'quit' 或 'exit' 退出\n")

  mode = None
  messages = []

  while True:
    if not mode:
      choice = input("请选择功能 (1/2/3/4): ").strip()
      
      if choice.lower() in ['quit', 'exit']:
        print("再见!")
        break
      
      if choice == '1':
        mode = 'chat'
        print("\n进入文字对话模式 (输入 'back' 返回主菜单)")
        messages = []
      elif choice == '2':
        mode = 'image'
        print("\n进入图像生成模式 (输入 'back' 返回主菜单)")
      elif choice == '3':
        mode = 'video'
        print("\n进入视频生成模式 (输入 'back' 返回主菜单)")
      elif choice == '4':
        mode = 'check_video'
        print("\n进入视频状态查询模式 (输入 'back' 返回主菜单)")
      else:
        print("无效选择,请重新输入\n")
        continue
    
    user_input = input("你: ")
    
    # 检查是否返回主菜单
    if user_input.lower() == 'back':
      mode = None
      print()
      continue
    
    # 检查是否退出
    if user_input.lower() in ['quit', 'exit']:
      print("再见!")
      break
    
    # 根据不同模式处理
    if mode == 'chat':
      messages.append({"role": "user", "content": user_input})
      print("AI: ", end="", flush=True)
      ai_response = chat_with_ai(messages)
      print(ai_response)
      messages.append({"role": "assistant", "content": ai_response})
      print()
    
    elif mode == 'image':
      result = generate_image(user_input)
      if isinstance(result, list):
        print(f"\n生成了 {len(result)} 张图像:")
        for i, url in enumerate(result, 1):
          print(f"{i}. {url}")
      else:
        print(result)
      print()
    
    elif mode == 'video':
      result = generate_video(user_input)
      print(f"结果: {result}")
      print("可以使用功能4查询任务状态\n")
    
    elif mode == 'check_video':
      # 检查任务ID是否为空
      if not user_input.strip():
        print("错误: 任务ID不能为空，请输入有效的任务ID\n")
        continue
      
      result = check_video_status(user_input.strip())
      print(result)
      print()


if __name__ == "__main__":
  main()
