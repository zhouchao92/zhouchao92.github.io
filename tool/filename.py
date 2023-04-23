"""
获取文件夹下所有的markdown文件名，并写入指定的js文件
"""

import os


def listfilenames(path):
    names = []
    filenames = os.listdir(path)
    for filename in filenames:
        names.append(filename[0:-3])
    return names


def rewrite(path, content):
    file = open(path, 'w', encoding="utf-8")
    file.write(content)


if __name__ == '__main__':
    recruitment = listfilenames('static/recruitment')
    project = listfilenames('static/project')

    content = f'const recruitment = {recruitment};\nconst project = {project};\n\n'
    content += 'export { recruitment, project };'

    rewrite('src/constant/filenames.js', content)
