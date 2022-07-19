/**
 * 工具类
 */

const fs = require('fs').promises;
const { extname } = require('path');

class Toolkit {
  constructor () {

  }

  // 对文件重命名
  async renameFile (oldPath, newPath) {
    try {
      const result = await fs.rename(oldPath, newPath)
      console.log('rename => ', result);
    } catch (error) {
      throw new Error('重命名文件失败 => ', error.message);
    }
  }

  // 删除指定目录下，指定后缀的文件
  async delFileList (path, ext) {
    try {
      const fileList = await this.getDirsFileList(path);
      
      if (fileList.length) {
        fileList.forEach(async (item, index) => {
          if (extname(item) === ext) {
            await fs.unlink(`${path}/${item}`);
            console.log(`删除成功 => 第${index + 1}个`);
          }
        });
      } else {
        console.log("该目录下未找到文件");
      }
    } catch (error) {
      throw new Error('删除文件失败 => ', error.message);
    }
  }

  // 获取文件列表
  async getDirsFileList (path) {
    try {
      return await fs.readdir(path);
    } catch (error) {
      throw new Error('获取文件列表失败 => ', error);
    }
  }
}

module.exports = new Toolkit();
