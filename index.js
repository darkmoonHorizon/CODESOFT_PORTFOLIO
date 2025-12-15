
function initAOS() {
    AOS.init({
       
        duration: 1000,  
        once: true,      
        easing: 'ease-in-out', 
    });
}
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    setupMobileMenu();
})