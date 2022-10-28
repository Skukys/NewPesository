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

// let nums = document.querySelectorAll('.button.num')
// let op = document.querySelectorAll('.button.oper')
// let clear = document.querySelector('.button.clear')
// let showBlock = document.querySelector('.result')
//
// let nowNum = 0
// let lastNum = ''
//
// let operators = {
//     sum: (a,b) => {
//         return parseInt(a) + parseInt(b)
//     },
//     min: (a,b) => {
//         return parseInt(a) - parseInt(b)
//     },
//     um: (a,b) => {
//         return parseInt(a) * parseInt(b)
//     },
//     del: (a,b) => {
//         return parseInt(a) / parseInt(b)
//     }
// }
//
// let updateShow = (nowStep, click,) => {
//     if(nowNum === 0)
//         nowNum = nowStep
//     else
//         nowNum = nowNum + nowStep
//     showBlock.innerHTML = nowNum
// }
//
//
//
// nums.forEach(item => {
//     item.addEventListener('click', () => {
//         updateShow( item.innerHTML)
//     })
// })
//
// op.forEach(item => {
//     item.addEventListener('click', () => {
//         if(item.innerHTML === '+'){
//
//         } else if (item.innerHTML === '-') {
//
//         } else if (item.innerHTML === '*') {
//
//         } else if (item.innerHTML === '/') {
//
//         }
//     })
// })
//
//
// clear.addEventListener('click', () => {
//     nowSum = 0
//     lastNum = 0
//     nowStep = ''
//     showBlock.innerHTML = nowSum
// })

// let privet = 'privet'
// console.log('hello ' + 'privet')
// console.log(`hello ${privet}`)

// querySelector
// querySelectorAll
// addEventListener
// getAttribute
// setAttribute


let input = document.querySelector(`.div`)

input.insertAdjacentHTML('afterbegin', `<div class="hello"></div>`)

console.log(input)


































