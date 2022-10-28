// function sum (a,b) {
//     console.log(a + b)
// }
// sum(10, 2)

// let calc = (a, b) => {
//     console.log(a+b)
// }

// calc(10, 2)

// const obj = {
//     name: 'Никита',
//     age: 17,
//     weight: 100,
//     privet: () => {
//         console.log('Меня зовут ' + obj.name + ' мне ' + obj.age + 'лет')
//     }
// }

// const array = [
//     1, 2, 3, 4, 5
// ]

// let sum = (arr) => {
//     let sumArray = 0
//     for (let i = 0; i < arr.length; i++){
//         sumArray += arr[i]
//     }
//     console.log(sumArray)
// }

// let sum = (arr) => {
//     let sumArray = 0
//     arr.forEach(element => {
//         sumArray += element
//     })
//     console.log(sumArray)
// }
// sum(array)

// let nums = document.querySelectorAll('.button.num')
// console.log(nums);

let nums = document.querySelectorAll('.button.num')
let op = document.querySelectorAll('.button.oper')
let clear = document.querySelectorAll('.button.clear')
let showBlock = document.querySelector('.result')

let nowSum = 0
let lastNum = ''
let nowStep = ''

let updateShow = (nowSum, click, nowStep) => {
}

let changeStep = (name, click) => {
    nowStep = name
    updateShow(nowSum, click, nowStep)
}

updateShow(nowSum)

nums.forEach(item => {
    item.addEventListener('click', () => {
        changeStep('num', item.innerHTML)
    })
})

clear.addEventListener('click', () => {
    nowSum = 0
    lastNum = 0
    nowStep = ''
    showBlock.innerHTML = nowSum
})