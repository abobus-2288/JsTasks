let closeButton = document.getElementById('popup__close')
let openButton = document.getElementById('button')

const onClick = (e) => {
    e.preventDefault()

    let popup = document.getElementById('popup')

    popup.classList.toggle('opened')
}

const onClickWindow = (e) => {
    if (e.target.id !== 'popup__content' && e.target.id === 'popup') {
        onClick(e)
    }
}

closeButton.onclick = onClick
openButton.onclick = onClick
window.onclick = onClickWindow