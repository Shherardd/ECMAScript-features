// operador de reposo extrae objetos de uno que aun no se ha construido

const obj = {
    name: 'Sherard',
    age: 24,
    country: 'MX',
}

let { name, ...all} = obj

console.log(name, all) // name y todo lo demas  (AUB)

console.log(all)       // todo lo demas sin name (B)

// spread operator u operador de propagacion
const obj1 = {
    name: 'Sherard',
    age: 24
}

const obj2 = {
    ...obj1,   // anidar objetos dentro de otro con el spread operator
    country: 'MX'
}

console.log(obj1)
console.log(obj2)

// Promise.finally

const promesa = () => {
    return new Promise((resolve, reject) => {
        if (1){
           setTimeout(() =>resolve('promesa resuelta'),3000) 
        }else{
            reject(new Error('test Error'))
        }
    })
}


promesa()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('promesa finalizada')) // se ejecuta siempre que la promesa haya terminado haya sido exitosa  no 

// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20') // matchea el string y los asigna a partir del primer elemento como el numero 1
const isTrueOrNot = regexData.test('2018-04-20') // devuelve true si el strin corresponde a la expresion regular
const isUnicode = regexData.unicode // devuelva true si el string es unicode


const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
console.log(isTrueOrNot)
console.log(isUnicode)
