
const pars = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Yey done!'), 3000)
})

const asyncFunction = async() => {
    const result = await pars

    console.log(result)
}

asyncFunction()