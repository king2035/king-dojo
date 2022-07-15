// 真值(布尔值)缩小

function multiplyAll(
  values: number[] | undefined | null,
  factor: number
) {
  if (!values) {
    return values;
  } else {
    return values.map(x => x * factor);
  }
}

console.log(multiplyAll([2, 4], 2));
console.log(multiplyAll(undefined, 2));
console.log(multiplyAll(null, 2));
