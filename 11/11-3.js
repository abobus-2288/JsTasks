let body = document.querySelector('body')
let images = document.getElementsByTagName('img')

if (localStorage.currentBg) {
    console.log('a')
    body.style.backgroundImage = `url("${localStorage.getItem('currentBg')}")`
} else {
    body.style.backgroundImage = images[0].src
}

window.addEventListener('click', (e) => {
    for (let img of images) {
        if (e.target == img) {
            let src = e.target.getAttribute('src')
            localStorage.setItem('currentBg', src)
            
            body.style.backgroundImage = `url("${src}")`
            
            e.target.classList.add('active')
            
            for (let otherImg of images) {
                if (otherImg != img) {
                    otherImg.classList.remove('active')
                }
            }
        }
    }
})