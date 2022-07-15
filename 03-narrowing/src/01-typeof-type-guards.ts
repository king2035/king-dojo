// 类型缩小

function printAll (strs: string | string[] | null) {
  // 这里 typeof null 的结果会是 'object', 所以，会进入到循环中；但是null为空值不能循环，所以就会需要增加判断
  if (strs !== null && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // 
  }
}