// const userInput = process.argv[2]

// console.log("The user typed in this: " + userInput)

let count = 0
const time = setInterval(() => {
    console.log(count++)
    if(count > 5){
        clearInterval(time)
    }
}, 1000)

// console.log(time)

