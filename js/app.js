const navLinks = document.querySelectorAll('.nav__link');
const sectionEl = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () =>{
    sectionEl.forEach(sectionEl => {
        if(window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 4 )){
            currentSection = sectionEl.id;
        }
    })

    navLinks.forEach(navLinks => {
        if(navLinks.href.includes(currentSection)){
            document.querySelector('.active-link').classList.remove('active-link')
            navLinks.classList.add('active-link')
        }
    })
})