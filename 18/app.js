// Задание 1
// Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

// const names = ['Eugene', 'Maksim', 'Sergey', 'Dmitry', 'Vladimir', 'Oleg']
//
// const [name1, name2, ...rest] = names
// console.log(name1, name2)
//
// if (names.length < 2) {
//     const name4 = 'alex'
//     console.log(name4)
// } else {
//     for (const name of rest) {
//         console.log(name)
//     }
// }

//Задание 2
//
// Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.

// const names2 = ['Eugene', 'Maksim', 'Sergey', 'Dmitry', 'Vladimir', 'Oleg']
//
// const logNames = (name1, name2, name3) => {
//     console.log(name1, name2, name3)
// }
//
// logNames(...names2)

// Задание 3
//
// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

// const obj = {
//     name: 'Eugene',
//     age: 17,
// }
//
// const {name, age, ...fields} = obj

//Задание 4
//  1. Создайте функцию "meanScore", которая будет принимать любое количество аргументов, объединять их в один массив и возвращать среднее значение всех аргументов, округленное до 2 знаков после запятой.
// 2. Если хотя бы один элемент в этом массиве не является числом - выводим в консоль следующую ошибку:
// "Все аргументы в вызове функции должны быть числами!"

// const meanScore = (...args) => {
//     let sum = 0
//     let numberOfArgs = 0 // Это количество аргументов попадающих в сумму (только числа)
//     for (const arg of args) {
//         if (typeof arg !== 'number') {
//             console.log('Все аргументы в вызове функции должны быть числами!')
//             continue
//         }
//         sum += arg
//         numberOfArgs++
//     }
//     console.log(sum / numberOfArgs.toFixed(2))
// }
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b']
//
// meanScore(...numbers)

// Задание 5 (повторение)
//
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.
//
// Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.
// В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.
// При клике на имя пользователя на боковой панели -  в основной части информация меняется на выбранного пользователя.
// Для оформления можно использовать Bootstrap компонент Card:
// - для списка пользователей - шаблон Links and buttons - вариант с кнопками
// https://getbootstrap.com/docs/5.1/components/card/#list-groups
//
// - для отображения информации о пользователе - шаблон карточки без изображения.
// Нужно отобразить имя, ник, место проживания, компанию и email (как ссылку вида mailto:)
// ПРИМЕР, как должно получиться.

const ul = document.getElementById('list')
const info = document.getElementById('info')

const createList = (users) => {
    for (const user of users) {
        const template = `
        <li>
            <a href="" class="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700" id="${user.id}">
                            ${user.name}
            </a>
        </li>
        `

        ul.insertAdjacentHTML('beforeend', template)
    }
}

const createInfo = (user) => {
    info.innerHTML = ''

    const template = `
        <div class="my-3 divide-y divide-gray-100 text-sm w-full">
            <div class="flex items-center justify-between py-3 px-4">
                <p class="font-medium text-gray-900">Name</p>
                <p class="text-gray-700 sm:col-span-2">${user.name}</p>
            </div>

            <div class="flex items-center justify-between py-3 px-4">
                <p class="font-medium text-gray-900">Username</p>
                <p class="text-gray-700 sm:col-span-2">${user.username}</p>
            </div>

            <div class="flex items-center justify-between py-3 px-4">
                <p class="font-medium text-gray-900">Address</p>
                <p class="text-gray-700 sm:col-span-2">${user.address.city}</p>
            </div>

            <div class="flex items-center justify-between py-3 px-4">
                <p class="font-medium text-gray-900">Company</p>
                <p class="text-gray-700 sm:col-span-2">${user.company.name}</p>
            </div>

            <div class="flex items-center justify-between py-3 px-4">
                <p class="font-medium text-gray-900">Email</p>
                <p class="text-gray-700 sm:col-span-2">${user.email}</p>
            </div>
        </div>
    `

    info.insertAdjacentHTML('beforeend', template)
}


const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    createList(data)

    createInfo(data[0])

    console.log(data)

    const list = document.getElementsByTagName('li')

    for (let i = 0; i < list.length; i++) {
        const link = list[i].firstElementChild

        link.addEventListener('click', (e) => {
            e.preventDefault()

            link.classList.add('clicked')

            createInfo(data[i])

            console.log(data[i])

            for (let j = 0; j < list.length; j++) {
                const item = list[j].firstElementChild

                if (item.id !== link.id) {
                    item.classList.remove('clicked')
                }
            }
        })
    }
}

getUsers()