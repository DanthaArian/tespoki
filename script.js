// Smooth scrolling ko
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50, // Adjusted offset for header
            behavior: 'smooth'
        });
    });
});

// Animasi pada scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
