// Burger menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks'); 

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.5  
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);  
    });
});


