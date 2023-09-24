let tasks = []
localStorage.tasks ? tasks = JSON.parse(localStorage.tasks) : null

let textInput = document.querySelector('input')
let form = document.getElementById('form')
let ul = document.querySelector('ul')
let completeButton = document.getElementById('complete')

for (let t of tasks) {
    let li = document.createElement('li')
    li.innerText = t

    ul.appendChild(li)

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    tasks.push(textInput.value)
    localStorage.tasks = JSON.stringify(tasks)

    let li = document.createElement('li')

    li.textContent = textInput.value
    textInput.value = ''

    ul.appendChild(li)
})

completeButton.addEventListener('click', (e) => {
    e.preventDefault()

    let liArr = document.querySelectorAll('li')

    for (let li of liArr) {
        li.style.textDecoration = 'line-through'
    }
})