let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data)
})