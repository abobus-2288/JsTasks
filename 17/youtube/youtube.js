// Задание с Youtube Viewer

// Задание 1. Youtube Viewer
//
// Разработать youtube-виджет, как в примере ЗДЕСЬ.
//
// ПОРЯДОК РАБОТЫ
// 1. Подготовьте верстку:
// - форма с инпутом и кнопкой
// - блок для плеера
// - блок для превьюшек
// 2. JS
// Использовать следующее API:
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=ИСКОМАЯ_ФРАЗА&type=video
// где "ИСКОМАЯ_ФРАЗА" должна заменяться на текст из инпута, который заполняет пользователь.
// В адресе есть API-ключ (выделен жирным), у него есть квоты на использование. Если ключ не будет работать, используйте другой (AIzaSyBtpCmb4WHmKy3I10fzVprfjfW172m8ZnQ) или получите свой по инструкции.
// - Изучить ответ, там будет 5 элементов, описывающих видеоролики. Взять первый и для него создать разметку.
// Код для видеоплеера будет таким:
// тег iframe width="560" height="315" src="https://www.youtube.com/embed/ВИДЕО_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
// где "ВИДЕО_ID" - это videoId, который вы должны увидеть к ответе от API.
// - Сделать так, чтобы плееры не множились при повторном поиске, а заменялись друг на друга.
// - Сделать дополнительную отрисовку пяти элементов из ответа в виде превью (картинок) под видео (не плееров, а картинок!). При нажатии на превью плеер подменяется на выбранный ролик.

const API_KEY = 'AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10'

const input = document.getElementById('search')
const submit = document.getElementById('submit')
const player = document.getElementById('player')
const list = document.getElementById('list')
const form = document.getElementById('form')

const createPlayer = (id) => {
    const template = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `

    player.innerHTML = template
}

const createListItem = (id) => {
    const template = `
        <img class="mr-4 h-20 hover:cursor-pointer hover:transform hover:scale-110 transition duration-300" onclick="createPlayer('${id}')" class="" src="https://img.youtube.com/vi/${id}/0.jpg">
    `

    list.innerHTML += template
}

const createList = (ids) => {
    ids.forEach(id => {
        createListItem(id)
    })
}

const deleteList = () => {
    list.innerHTML = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = input.value

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${search}&type=video`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)

            const ids = data.items.map(item => item.id.videoId)

            console.log(ids)

            createPlayer(ids[0])
            deleteList()
            createList(ids)
        })
})