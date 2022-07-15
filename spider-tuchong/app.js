/**
 * 功能：图虫私房照爬虫
 * url1: https://tuchong.com/rest/tags/私房照/posts?page=1&count=20&order=weekly&before_timestamp=
 * url2: https://tuchong.com/rest/2/sites/1031749/posts?count=20&page=1&before_timestamp=0
 * url3: https://tuchong.com/1031749/110835974/
 * url4: https://photo.tuchong.com/20095864/f/743844051.jpg
 */

const fs = require('fs')
const https = require('https')
const sleep = require('sleep')
const httpService = require('./utils/httpService')
const pages = {
  currentPage: 1,
  countPage: 20
}

function parseUrl (page) {
  return `https://tuchong.com/rest/tags/私房照/posts?count=${pages.countPage}&page=${page}`
}

async function getData(url) {
  const data = await httpService.get(url)
  const { more, postList, siteList } = JSON.parse(data)
  postList.forEach(item => {
    createDir(siteList[item.author_id]['name'], item.author_id)

    item.images.forEach(ele => {
      downloadImage(`https://photo.tuchong.com/${item.author_id}/f/${ele.img_id}.jpg`, `${__dirname}/image/${siteList[item.author_id]['name']}_${item.author_id}/${ele.img_id}.jpg`)
    })
  })
   
  if (more) {
    pages.currentPage += 1
    getData(parseUrl(pages.currentPage))
  } else {
    console.log('递归结束')
  }
}

getData(parseUrl(1))

// 使用用户名和id新建目录
function createDir(author, authorId) {
  const dir = `${__dirname}/image/${author}_${authorId}`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  } else {
    console.log('dir :>> ', dir + '已经存在');
  }
}

// 下载对应的文件到到对应的目录
function downloadImage(picUrl, dirname) {
  // httpService.get(url).then(res => {
  //   fs.writeFile('./image/aa.txt', res, 'binary', err => {
  //     if (!err) console.log('下载成功')
  //   })
  // })

  https.get(picUrl, res => {
    let imageData = ''
    res.setEncoding('binary')

    res.on('data', chunk => {
      imageData += chunk
    })

    res.on('end', () => {
      fs.writeFile(dirname, imageData, 'binary', err => {
        if (!err) {
          console.log('下载成功')
        } else {
          console.log('下载失败', err);
        }
      })
    })
  })

  sleep.sleep(Math.floor(Math.random() * 5))
}


process.on('uncaughtException',function(err){ 
  console.error('未捕获的异常', err.message);
})

process.on('unhandledRejection', function (err, promise) {
  console.error('有Promise没有被捕获的失败函数', err.message);
})