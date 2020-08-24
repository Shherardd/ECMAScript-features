const data = {
    frontend: 'Sherard',
    backend: 'Jerry',
    design: 'Shai',
}
// Object entries Convertir objetos a matriz
const entries = Object.entries(data)

console.log(entries)
console.log(entries.length)

// Object Values Convierte los elementos del objeto a valores de un array ignorando la asignacion
const data2 = {
    frontend: 'Sherard',
    backend: 'Jerry',
    design: 'Shai',
}

const values = Object.values(data2)
console.log(values)

//padding Agrega elementos al inicio o final para tener una longitud determinara, (10 en este caso)

const string = 'hello'
console.log(string.padEnd(10,'0'))
console.log(string.padStart(10,'0'))

// commas
const object = {
    name: 'Sherard', // puede o no haber mas elementos dentro del objeto
}
// Mapea arrays, y los objetos dentro de ellos
const mapea = () =>
data.map((e)=>{
    console.log(e)
})

mapea()