const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('ul')

const checkLi = (e) => {
	e.parentElement.style.textDecoration === 'line-through' ? e.parentElement.style.textDecoration = 'none' : e.parentElement.style.textDecoration = 'line-through'

	let parent = e.parentElement

	ul.appendChild(parent)

}

const deleteLi = (e) => {
	e.parentElement.remove()
}

form.onsubmit = (e) => {
	let li = document.createElement('li')
	e.preventDefault()

	let innerHTML = `
	<input class="checkLi" id="checkbox" type="checkbox" onclick="checkLi(this)">
    ${input.value}
    <button class="deleteLi" onclick="deleteLi(this)">x</button>
	`

	input.value = ''

	li.innerHTML = innerHTML
	ul.appendChild(li)
}



