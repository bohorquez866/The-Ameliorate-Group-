const navbar = document.querySelector('.navbar');
const sectionOne = document.querySelector('.header');

const sectionOneOpt = {
    rootMargin: "-50px"
};

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled')
        }
    })

}, sectionOneOpt)

sectionObserver.observe(sectionOne);