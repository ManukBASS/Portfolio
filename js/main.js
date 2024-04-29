/*===== YEAR FUNCTIONS =====*/
const nameElement = document.getElementById('footer__name');

// Actual year
const currentYear = new Date().getFullYear();

// DOM H2
nameElement.innerHTML += ', ' + currentYear;

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1400,
    reset: false
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })
sr.reveal('.section-title', { origin: 'top', distance: '80px', duration: 1400 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 100 })
sr.reveal('.about__cv', { delay: 900, interval: 300 })

/*SCROLL EXPERIENCE*/
sr.reveal('.experience-card', { delay: 300, interval: 100 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__tech', { distance: '20px', interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PORTFOLIO*/
sr.reveal('.computer-icon', { interval: 200 })
sr.reveal('.mobile-icon', { interval: 200 })
sr.reveal('.portfolio__filters-p', { interval: 300 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__button', { delay: 600 })

/*===== MANDY MODAL =====*/

function mostrarModalGata() {
    var modalContainer = document.getElementById("modal-container");
    var modalClose = document.getElementById("modal-close");
    var miauAudio = document.getElementById("miau-audio");

    modalContainer.classList.add("show");
    modalContainer.style.display = "flex";

    miauAudio.play();
    modalClose.addEventListener("click", cerrarModalGata);
    window.addEventListener("click", cerrarModalGataOutside);
}

function cerrarModalGata() {
    var modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "none";
    modalContainer.classList.remove("show");
}

function cerrarModalGataOutside(event) {
    var modalContainer = document.getElementById("modal-container");
    if (event.target === modalContainer) {
        modalContainer.style.display = "none";
    }
}

document.getElementById("gatito-icon").addEventListener("click", mostrarModalGata);

