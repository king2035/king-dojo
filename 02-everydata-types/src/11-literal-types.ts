// 文字类型

let testString = 'Hello World';
testString = '前锋大前端';

const constantString = 'Hello, World';


// x2 变量只能存储 hello
let x2: 'hello' = 'hello';
x2 = 'hello';

function handleRequest(url: string, method: 'GET' | 'PSOT' | 'GUESS') {

}

const req = {
  url: 'https://example.com',
  method: 'GET'
} as const

handleRequest(req.url, req.method)
