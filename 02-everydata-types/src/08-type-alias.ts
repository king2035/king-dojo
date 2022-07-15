// 类型别名
type Point = {
  x: number,
  y: number
}

function printCoord2(pt: Point) {

}

printCoord2({
  x: 100,
  y: 200
})

type ID = number | string

function printId2(id: ID) {

}

printId2(100);
printId2('hello');