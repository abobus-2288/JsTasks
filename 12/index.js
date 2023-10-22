const navTabs = document.getElementById('ul')
const navLinks = Array.from(document.querySelectorAll('.nav-link'))
const infoBlocks = document.querySelectorAll('.info-item')

navTabs.onclick = (e) => {
    console.log(e.target.id)
    
    if (e.target.matches('.nav-link')) {
        for (let i = 0 ; i < navLinks.length ; i++) {
            navLinks[i].classList.remove('active')
        }
        
        for (let i = 0 ; i < infoBlocks.length ; i++) {
            infoBlocks[i].classList.remove('active')
        }
        
        e.target.classList.add('active');
        
        const index = navLinksL.indexOf(e.target)
        infoBlocks[index].classList.add('active')
    }
}