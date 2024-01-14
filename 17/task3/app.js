// Задание 3
//
// По адресу `https://api.github.com/users/${userName}` можно получить информацию о пользователе github.
//
// 1.Запросите информацию о себе и оформите страничку с данными:
//
// - аватар
//
// - имя пользователя
//
// - ссылка на страницу на github
//
// - дата регистрации на github
//
// - количество репозиториев.
//
// 2. Измените приложение так, чтобы имя пользователя можно было вводить в поле и после нажатия на кнопку отрисовывалась информация о нем.

const form = document.getElementById('form')
const input = document.getElementById('username')

const profile = document.getElementById('profile')

const showUserData = (data) => {
    const {avatar_url, name, html_url, created_at, public_repos} = data

    const template = `
        <h1 class="text-3xl font-bold mb-4">${name}</h1>
        <img class="rounded-full w-40 mb-4" src="${avatar_url}" alt="${name}" />
        <p class="mb-4 text-lg font-bold"><a href="${html_url}">${html_url}</a></p>
        <p class="mb-4">${created_at}</p>
        <p class="mb-4">${public_repos}</p>
    `

    profile.innerHTML = template
}

const getUserData = async (userName) => {
    const url = `https://api.github.com/users/${userName}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }

    return await response.json()
}

form.onsubmit = async (e) => {
    e.preventDefault()

    const userName = input.value

    getUserData(userName)
        .then((data) => {
            console.log(data)

            showUserData(data)
        })
        .catch((err) => {
            console.log(err)
        })
}