// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
//
// xhr.send()
//
// xhr.onload = function () {
//     let posts = JSON.parse(xhr.response)
//
//     console.log(posts[0].title)
// }


// // N-1
//
// const title = document.getElementById('title')
// let xhr = new XMLHttpRequest()
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
//
// xhr.send()
//
// xhr.onload = function () {
//     let todo = JSON.parse(xhr.response)
//
//     title.textContent = todo.title
//
// }

// N-2

const todos = document.getElementById('todos')
let xhr = new XMLHttpRequest()

const createTodo = (todo) => {
    const li = document.createElement('li')
    li.textContent = todo.title
    return li
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xhr.send()

xhr.onload = function () {
    let todoList = JSON.parse(xhr.response)
    
    todoList.forEach(todo => {
        todos.append(createTodo(todo))
    })
}
