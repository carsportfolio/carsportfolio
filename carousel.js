let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.dot-container');

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    currentSlideIndex = (index + slides.length) % slides.length;
    const offset = -currentSlideIndex * 100;
    document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}

function goToSlide(index) {
    showSlide(index);
}

createDots();
updateDots();
showSlide(currentSlideIndex);

document.querySelector('.prev-button').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next-button').addEventListener('click', () => moveSlide(1));
