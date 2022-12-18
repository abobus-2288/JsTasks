// // N-1
// // Задание 1
// // Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// //     Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// //     Выведите в консоль строку:
// //     С помощью браузера ... я открыл страничку ...
// // (необходимые значения добавьте с помощью BOM)
//
// console.log(navigator);
// console.log(location);
//
// console.log(`С помощью браузера ${navigator.appCodeName} я открыл страничку ${location.href}`);

// // N-2
// // Задание 2
// // В файле html есть разметка:
// //     <ul id="list">
// //         <li>Джон</li>
// //         <li>Пит</li>
// //         <li>Джессика</li>
// //         <li>Сара</li>
// //     </ul
// // Вывести в консоль каждое из имен (содержимое каждого li).
//
// let lis = document.querySelectorAll('li');
// lis.forEach(element => console.log(element.innerHTML));

// // N-3
// // Задание 3
// // Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
//
// let listOfLi = document.querySelectorAll('li');
// console.log(listOfLi);
// listOfLi.forEach((li) => {
//     console.log(li.innerText)
// })

// // N-4
// // Задание 4
// // Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
//
// let p = document.createElement('p');
// p.innerText = 'Par';
// p.classList.add('p'); //Сделал в index.css
// document.body.appendChild(p);

// // N-5
// // Задание 5
// // Написать в html тег заголовка с текстом "Сегодня:"
// // После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
//
// const p = document.querySelector('h3 + p');
// let date = new Date;
// p.innerText = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

// // N-6
// // Задание 6
// // Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
//
// const createTag = (name, color, content) => {
//     let element = document.createElement(name);
//     element.style.color = color;
//     element.innerText = content;
//
//     return element;
// }
// let li = createTag('li', 'red', 'List item');
//
// console.log(li);
//
// document.body.appendChild(li);

// // N-7
// // Задание 7
// // Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
//
// let select = document.querySelector('select');
// for (let i = -10 ; i <= 50 ; i++) {
//     let option = document.createElement('option');
//     let date = new Date(1970 + i, 1);
//     option.innerText = String(date.getFullYear());
//     select.appendChild(option)
// }

// // N-8
// // Задание 8
// // Вставить в страницу (в html документ) ul.
// //     Предусмотреть в коде следующий массив:
// //     const clients =[
// //
// //         {name: "Женя",order: true},
// //         {name: "Кристина",order: true},
// //         {name: "Павел",order: false},
// //         {name: "Виолетта",order: false},
// //         {name: "Костя",order: true}
// //
// //     ]
// // Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// //     - Клиент Женя оплатил заказ
// // - Клиент Павел отменил заказ
// // ... остальные li с контентом
// // Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
//
// const clients = [
//
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
//
// ]
//
// const ul = document.getElementById('list8');
//
// clients.forEach(client => {
//     let {name, order} = client;
//
//     let li = document.createElement('li');
//     li.innerText = `Клиент ${name} ${order ? 'оплатил' : 'отменил'} заказ`;
//
//     ul.appendChild(li);
// })

// // N-9
// // Задание 9
// // Есть массив ссылок:
// //     let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// // Вам нужно:
// //     1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// // 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// // c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// // При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// // ПОДСКАЗКА.Для создания атрибута используется js метод setAttribute:
// //     element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// // Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// // 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
//
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
//
// let div = document.getElementById('links9');
//
// linksArr.forEach(link => {
//     let a = document.createElement('a');
//     a.setAttribute('href', link);
//     a.setAttribute('target', '_blank');
//
//     a.innerText = link;
//
//     div.appendChild(a);
//    
// })

// // N-10
// // Задание 10
// // Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// //     ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// //     ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
//
// let removals = document.querySelectorAll('.forRemove');
//
// console.log(removals);
//
// for (let item of removals) {
//     item.remove();
// }

// // N-11
// // Задание 11*
// // Создать массив объектов с полями name, age. Например:
// // const users = [
// //     {name: 'Mark', age: 12},
// //     {name: 'Olga', age: 30},
// //     {name:'Tom', age: 25},
// //     {name:'Den', age: 43}
// // ]
// // Создать в html таблицу (table).
// //     C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// //     ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
//
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
//
//     {name:'Den', age: 43}
// ]
//
// let table = document.getElementById('users10');
//
// users.forEach(user => {
//     let tr = document.createElement('tr');
//
//     let nameTd = document.createElement('td');
//     let ageTd = document.createElement('td');
//
//     nameTd.innerText = user.name;
//     ageTd.innerText = user.age;
//
//     nameTd.style.color = 'red';
//     ageTd.style.color = 'blue';
//
//     tr.appendChild(nameTd);
//     tr.appendChild(ageTd);
//
//     table.appendChild(tr);
// })

// N-12
// Задание 12
// Есть верстка: https://teenscool1.notion.site...
//     С помощью JavaScript:
//     1) Найти в коде список ul и добавить ему класс “list”.
// 2) Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 3) На li через один (начиная с самого первого) установить класс “item”
// 4) На все ссылки в примере установить класс “custom-link”

let linksAll = document.querySelectorAll('a');

linksAll.forEach(link => {
    link.classList.add('custom-link');
})

let ul = document.querySelector('ul');
ul.classList.add('list');

let linksOutOfUl = document.querySelectorAll('body > a');

linksOutOfUl.forEach(link => {
    link.id = 'link';
})

let linksInUl = document.querySelectorAll('ul > li > a');

for (let i = 0 ; i < linksInUl.length ; i++) {
    if (i % 2 === 0) {
        linksInUl[i].id = 'item';
    }
}