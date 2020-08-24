const helloWorld = () => {
    return new Promise((resolve, reject)=> {
        if(1) {
            setTimeout(() => resolve('hello world'), 2000)
        }else{
            reject(new Error('test Error'))
        }
    })
}

const helloAsync = async () => {
    const data = await helloWorld()
    console.log(data)
}

//helloAsync()

const anotherFunction = async () => {
    try {
        const data = await helloWorld()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()