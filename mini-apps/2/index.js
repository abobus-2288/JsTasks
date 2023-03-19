const bClosed = document.getElementById('menu_closed')
const bOpened = document.getElementById('menu_opened')
const sidebar = document.getElementById('sidebar')

const onClick = (e) => {
	e.preventDefault()

	sidebar.classList.toggle('opened')
	bClosed.classList.toggle('opened')
}

bClosed.onclick = onClick
bOpened.onclick = onClick