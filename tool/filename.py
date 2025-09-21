"""
获取文件夹下所有的markdown文件名，并写入指定的js文件
"""

import os


def listfilenames(path):
  names = []
  filenames = os.listdir(path)
  # 跳过索引文件 index.md
  for filename in filenames:
    if filename == 'index.md':
      continue
    names.append(filename[0:-3])
  return names


def rewrite(path, content):
  file = open(path, 'w', encoding="utf-8")
  file.write(content)


if __name__ == '__main__':
  # recruitment = listfilenames('static/recruitment')
  notes = listfilenames('static/note')
  projects = listfilenames('static/project')

  # content = f'const recruitment = {recruitment};\nconst project = {project};\n\n'
  content = f'const notes = {notes};\nconst projects = {projects};\n\n'
  # content += 'export { recruitment, projects };'
  content += 'export { notes, projects };'
  content += '\n'

  rewrite('src/constant/filenames.js', content)
