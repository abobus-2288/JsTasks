// console.log('Запрос данных...');
//
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//
//         const product = {
//             title: 'Milk',
//             price: 2,
//         }
//
//         resolve(product)
//     }, 2000)
// })
//
// request.then((product) => {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product)
//         }, 2000)
//
//         // reject('Error asdsa')
//     })
// }).then(data => {
//     data.newProp = true
//     return data
// }).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log('Выполнение кода finally')
// })

fetch('https://jsonplaceholder.typicode.com/todos/5').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})

// N-1
