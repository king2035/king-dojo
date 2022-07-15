"use strict";
let obj = {
    x: 0
};
// any 会禁用所有的类型检查
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n = obj;
