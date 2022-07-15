/**
 * 功能：创建一个简单的 web 服务器
 * 在浏览器地址栏输入 http://localhost:8080/index.html/
*/

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request, response) => {
  // 解析请求，包括文件名
  const pathname = url.parse(request.url).pathname;

  // 输出请求的文件名
  console.log('Request for ' + pathname + 'received.');

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substring(1), (err, data) => {
    if (err) {
      console.log('err =>', err.message);

      // http 状态码404
      // content type: text/html
      response.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      // HTTP 状态码: 200 : OK
      // Content Type: text/html
      response.writeHead(200, {'Content-Type': 'text/html'});    
      
      // 响应文件内容
      response.write(data.toString());  
    }

    response.end()
  })
}).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
