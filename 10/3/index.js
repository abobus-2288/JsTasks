const button = document.getElementById('burger')
const menu = document.getElementById('menu')

button.onclick = () => {
	button.classList.toggle('opened')
	menu.classList.toggle('opened')
}