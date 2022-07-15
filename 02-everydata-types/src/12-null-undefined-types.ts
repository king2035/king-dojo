let z: undefined = undefined
let u: null = null
// let v: string = undefined

function doSomething(x: string | null) {
  if(x === null) {

  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
} 
