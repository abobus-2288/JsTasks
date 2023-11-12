// console.log('1')
// console.log('2')
//
// setTimeout(() => {
//     console.log('Сообщение с задержкой 0 секунд')
// }, 0)
//
// setTimeout(() => {
//     console.log('Сообщение с задержкой 2 секунды')
// }, 2000)
// console.log('3')
// // alert('4')
// console.log('5')
//
// const greeting = (name) => {
//     console.log(`Hello, ${name}!`)
// }
//
// const sayHello = setInterval(() => {
//     console.log('Hello world!')
// }, 1000)
//
// setTimeout(() => {
//     clearInterval(sayHello)
// }, 5000)
//
// setTimeout(greeting, 5000, 'John')


// // N-1
//
// let i = 1;
//
// const msg = setInterval(() => {
//     console.log(`Сообщение номер ${i}`);
//     i++
// }, 2000)
//
// setTimeout(() => {
//     clearInterval(msg)
// }, 11000)

// N-2

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const timer = setInterval(() => {
    const date = new Date()
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
    seconds.textContent = date.getSeconds()
}, 1000)