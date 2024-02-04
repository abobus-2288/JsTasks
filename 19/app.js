const startBtn = document.getElementById('start')
const gameElement = document.getElementById('game')
const timeElement = document.getElementById('time')
const timeHeader = document.getElementById('time-header')
const resultElement = document.getElementById('result')
const resultHeader = document.getElementById('result-header')
const timeInput = document.getElementById('game-time')
const scoreElement = document.getElementById('score')

let score = 0
let isGameActive = false

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRamdomRGB = () => {
    return `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
}

const renderBox = () => {
    if (!isGameActive) {
        return
    }

    const box = document.createElement('div')

    const width = getRandomInteger(30, 100)
    const height = getRandomInteger(30, 100)

    const posX = getRandomInteger(0, gameElement.offsetWidth - width)
    const posY = getRandomInteger(0, gameElement.offsetHeight - height)

    box.style.width = `${width}px`
    box.style.height = `${height}px`
    box.style.backgroundColor = getRamdomRGB()
    box.style.position = 'absolute'
    box.style.top = `${posY}px`
    box.style.left = `${posX}px`
    box.style.cursor = 'pointer'
    box.classList.add('box')

    gameElement.append(box)
}

const endGame = () => {
    isGameActive = false
    gameElement.innerHTML = ''

    startBtn.classList.remove('hide')
    timeHeader.classList.add('hide')
    gameElement.style.backgroundColor = '#ccc'
    resultHeader.classList.remove('hide')
    resultElement.innerHTML = score

    timeInput.removeAttribute('disabled')

    score = 0
}

const startGame = () => {
    isGameActive = true

    startBtn.classList.add('hide')
    resultHeader.classList.add('hide')
    timeHeader.classList.remove('hide')
    gameElement.style.backgroundColor = '#fff'

    timeInput.setAttribute('disabled', true)

    let time = timeInput.value
    time = parseFloat(time)

    let interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            time -= 0.01
            timeElement.innerHTML = time.toFixed(2)
        }
    }, 10)

    renderBox()
}

gameElement.addEventListener('click', (e) => {
    if (e.target.className === 'box') {
        score++
        e.target.remove()
        renderBox()
    }
})

timeInput.addEventListener('input', () => {
    timeElement.innerHTML = timeInput.value

    timeHeader.classList.remove('hide')
    resultHeader.classList.add('hide')
})

startBtn.addEventListener('click', startGame)
