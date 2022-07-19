// const fs = require('fs').promises;

// async function del() {
//   try {
//     const dirs = await fs.readdir('./')
//     console.log(dirs);
//     // await fs.unlink('./aaaa.txt');
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// del();

const Toolkit = require('./modules/Toolkit')

async function init () {
  console.log('==========================开始删除文件========================')
  await Toolkit.delFileList('/Users/ghost/Desktop/linxi-english', '.xml');

  console.log('==========================开始给文件重命名========================')
  const fileList = await Toolkit.getDirsFileList('/Users/ghost/Desktop/linxi-english');
  fileList.forEach(async (item) => {
    await Toolkit.renameFile(`/Users/ghost/Desktop/linxi-english/${item}`, `/Users/ghost/Desktop/linxi-english/${(item.match(/P[\d]+/g))[0]}.台湾英语老师林熹-词根词缀记单词.mp4`)
  });
}

init()
