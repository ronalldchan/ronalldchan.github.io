const navSlide = () => {
    const collapse = document.querySelector('.collapse');
    const nav = document.querySelector('.nav-link');

    collapse.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

const app = () => {
    navSlide();
}

app();