// // N-1
//
// let i = 0;
//
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// // N-2
// // Перепишите код с использованием тернарного оператора
// // let country = 'Sweden';
// // let access;
// // if (country == 'Sweden') {
// //     access = true;
// // } else {
// //     access = false;
// // }
//
// let country = 'Sweden';
// let access;
// access = country === 'Sweden' ? true : false;

// // N-3
// // Задание 3
// // Дан массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// // Каждое значение обозначает админ (true) или пользователь (false).
// //     Из этого массива с помощью цикла сформировать массив объектов - roles, такой же длины, как и заданный массив.  У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// //     Т.е. из
// //     [true, false, false]
// // должно получиться
// //     [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
// // ПОДСКАЗКИ:
// //     1) создайте пустой массив roles.
// // 2) обойдите исходный массив с помощью цикла и, используя тернарный оператор, определите значение роли (admin или user) для каждого элемента массива. Определив это значение (его лучше записывать в переменную), сразу же пушьте в новый массив нужный объект.
//
// let newRoles = [];
// const roles = [true, false, false, true, false];
//
// for (let role of roles) {
//     role === true ? newRoles.push({role: 'admin'}) : newRoles.push({role: 'user'});
// }
//
// console.log(newRoles);

// // N-4
// // Задание 4
// // Создайте функцию findPositiveNumbers(). Она принимает массив в качестве параметра и возвращает новый массив, в котором содержатся только положительны элементы.
// //     Проверьте работу функции на примере массивов:
// //     const nums = [5, 4, 3, -3, -mini-apps, -1, 8, -20, 0]
// // const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90].
//
// const nums = [5, 4, 3, -3, -mini-apps, -1, 8, -20, 0];
// const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90]
//
// function findPositiveNumbers(arr) {
//     let newArr = [];
//     for (let num of arr) {
//         if (num > 0) {
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }
//
// console.log(findPositiveNumbers(nums));
// console.log(findPositiveNumbers(numbers));

// // N-5
// // Задание 5
// // Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// //     Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']
//
// function createArray(value, count) {
//     let newArr = [];
//     for (let i = 0; i < count; i++) {
//         newArr.push(value);
//     }
//     return newArr;
// }
//
// console.log(createArray('a', 30));

// // N-6
// // Задание 6
// // Определите массив, например let arr = [5, 4, 3, 8, 0].
// //     Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// //     Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// // а запуск функции filterFor(arr, mini-apps) дает результат []
// // а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
//
// let arr = [5, 4, 3, 8, 0];
//
// function filterFor(arr, a) {
//     let newArr = [];
//     for (let num of arr) {
//         num >= a ? newArr.push(num) : null
//     }
//     return newArr;
// }
//
// console.log(filterFor(arr, 3.11))

// // N-7
// // Задание 7
// // Написать функцию получения случайного цвета. Это будет строка вида "rgb(mini-apps,55,250)"
// // Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// // function getRandomInteger(min, max) {
// //     return Math.floor(Math.random() * (max - min)) + min;
// // }
// // ПОДСКАЗКИ:
// //     Каждый цвет - это строка, в которой участвуют 3 числа в диапазоне от 0 до 255.
// // Одна функция может вызывать другую функцию.
//
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// function getRandomRGB() {
//     return `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`;
// }
//
// console.log(getRandomRGB());

// // N-8
// // Задание 8
// // Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
// //     Примеры вызова такой функции:
// //     getSquares(0, 100) - выведет квадраты чисел от 0 до 100
// // getSquares(56, 87) - выведет квадраты чисел от 56 до 87
//
// function getSquares(beg, end) {
//     for (let i = beg ; i <= end ; i++) {
//         console.log(i**2);
//     }
// }
//
// getSquares(0, 100);

// // N-9
// // Задание 9
// // Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
// //     Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)
//
// function isInteger(x) {
//     return x % 1 === 0;
// }
//
// console.log(isInteger(1.1))

// // N-mini-apps
// // Задание mini-apps
// // Написать функцию, которая принимает целое число n.
// //     Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// //     Пример, при запуске функции с параметром 3:
// // "1 integer"
// // "1.5 decimal"
// // "2 integer"
// //
// // "2.5 decimal"
//
// function getNumberType(n) {
//     for (let i = 0 ; i <= n ; i += 0.5) {
//         console.log(`${i} ${i % 1 === 0 ? "Integer" : "Decimal"}`)
//     }
// }
//
// alal(100);