function printCoord(pt: {x: number, y: number}) {
  console.log('x,y :>> ', pt.x, pt.y);
}

printCoord({
  x: 3,
  y: 9
});

function printName(obj: {first: string, last?: string}) {
  // if (obj.last !== undefined) {
  //   console.log(obj.last.toUpperCase());
  // }

  console.log(obj.first, obj?.last?.toUpperCase());
}

printName({
  first: 'Felix',
})

printName({
  first: 'Felix',
  last: 'Lu'
})
