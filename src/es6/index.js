function newFunction (name, age, country) { // Before ES6

    let name = name || 'shd'
    let age = age || 24
    let country = country || 'MX'
    console.log(name, age, country)
}

//es6 
function newFunction2 (name = 'shd', age = 24, country = MX){  // After ES6
    console.log(name, age, country)
}

//template literals

let hello = 'hello'
let world = 'world'

let epicPhrase = hello + ' ' +world  /// Before ES6
let epicPhrase2 = `${hello} ${world}` // After ES6

console.log(epicPhrase)
console.log(epicPhrase2)

// Multi linea

let lorem = 'lorem ipsum\n'
+ 'dolor'

let lorem2 = `ahother epic phrase
this is another epic phrase`

console.log(lorem)
console.log(lorem2)

// destructuring

let person = {
    name:'Gerard',
    age: 24,
    country:'MX'
}

console.log(person.name, person.age, person.country)

let { name, age, country } = person

console.log(name, age, country)

// spread operator

let team1 = ["jerry","gerard","shai"]
let team2 = ["jerry2","gerard2","shai2"]

let education = ['David', ...team1, ...team2]

console.log(education)