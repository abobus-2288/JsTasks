const list = document.getElementById('list')
const createItem = (user) => {
    const template = `
        <li class="mb-2 p-2 bg-gray-200 rounded">${user.id} - ${user.name} - ${user.email}</li>
    `

    list.innerHTML += template
}

const createList = (users) => {
    users.forEach(createItem)
}

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    createList(data)

}

getUsers()