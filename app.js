const navSlide = () => {
    const collapse = document.querySelector('.collapse');
    const nav = document.querySelector('.nav-link');
    // const navLink = document.querySelectorAll('.navlink li');

    collapse.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // navLink.forEach((link, index) => {
    //     link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s'
    // })
}

const app = () => {
    navSlide();
}

app();