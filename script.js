let slides = document.querySelectorAll('.slider img');
let index = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active', 'prev', 'next');
    });

    slides[index].classList.add('active');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
    slides[(index + 1) % slides.length].classList.add('next');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
