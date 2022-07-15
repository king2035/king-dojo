// 使用接口
interface Point3 {
  x: number,
  y: number
}

function printCoord3(pt: Point3) {

}

printCoord3({
  x: 100,
  y: 200
})

// 扩展接口
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: 'winie',
  honey: true
}

console.log(bear.name)
console.log(bear.honey)

type Animal2 = {
  name: string
}

// 类型别名扩展字段
type Bear2 = Animal2 & {
  honey: boolean
}

const bear2: Bear2 = {
  name: 'winnie',
  honey: true
}


