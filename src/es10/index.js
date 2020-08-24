let array = [1,2,3,[1,2,3, [1,2,3]]]

console.log(array.flat(2)) //permite aplanar arreglos asandole como parametro la profundidas

let array2 = [1,2,3,4,5]

console.log(array2.map(value => [value, value *2])) // map [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]

console.log(array2.flatMap(value => [value, value * 2])) // flatMap [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

console.log(array.flat(2).flatMap(value => [value, value * 2]))


let hello = '                  hello world'
let hello2 = 'hello world               '

console.log(hello)
console.log(hello2)

console.log(hello.trimStart())
console.log(hello2.trimEnd())


// Object. fromEntries

let entries = [["name","sherard"],["age", 24]]

console.log(Object.fromEntries(entries)) // crea un objeto a partir de un arreglo 

// Objeto de tipo simbolo

let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)