function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// N-1
// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

let input1 = document.getElementById("input1")
let ul1 = document.getElementById('ul1')
let button1 = document.getElementById('button1')

button1.onclick = (e) => {

    let li = document.createElement('li')

    li.innerText = input1.value

    ul1.appendChild(li)
}

// N-2
// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

let input2 = document.createElement('input')
input2.id = 'input2'

document.body.appendChild(input2);

input2.onkeyup = () => {
    console.log(input2.value)
}

// N-3
// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).


let input3 = document.getElementById('input3') 
let form3 = document.getElementById('form3')
let ul3 = document.getElementById('ul3')

form3.onsubmit = (e) => {
    e.preventDefault()

    let li = document.createElement('li')
    li.innerText = input3.value
    
    ul3.appendChild(li)
}

// N-4
// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.


let form4 = document.getElementById('form4')
let select4 = document.getElementById('select4')
let input41 = document.getElementById('input4_1')
let input42 = document.getElementById('input4_2')
let div4 = document.getElementById('div4')

form4.onsubmit = (e) => {
    e.preventDefault()

    let resultPar = document.createElement('p')

    let result;

    switch (select4.value) {
        case '*': {
            result = input41.value * input42.value
            break
        }

        case '/': {
            result = input41.value / input42.value
            break
        }

        case '+': {
            result = input41.valueAsNumber + input42.valueAsNumber
            break
        }

        case '-': {
            result = input41.value - input42.value
            break
        }
    }

    resultPar.innerText = result

    div4.appendChild(resultPar)
}

// Второй способ:

form4.onsubmit = (e) => {
    e.preventDefault()

    let resultPar = document.createElement('p')

    let result;

    result = eval(`${input41.valueAsNumber} ${select4.value} ${input42.valueAsNumber}`)
    
    resultPar.innerText = result

    div4.appendChild(resultPar)
}

// N-5 
// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let button5 = document.getElementById('button5')

button5.onmouseenter = (e) => {

    function getRandomRGB() {
        return `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`;
    }
    
    button5.style.backgroundColor = getRandomRGB()
    
    let angle = getRandomInteger(-180, 180);
    console.log(angle)

    button5.style.transform= 'rotate('+angle+'deg)';
}