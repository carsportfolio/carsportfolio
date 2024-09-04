document.addEventListener('DOMContentLoaded', () => {
    const paragraphsContainer = document.querySelector('.scrolling-content');
    const dots = document.querySelectorAll('.scroll-indicator .dot');
    const numParagraphs = 3;
    let currentIndex = 0;

    const updateParagraph = (index) => {
        const offset = -index * 100;
        paragraphsContainer.style.transform = `translateY(${offset}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };
    updateParagraph(currentIndex);
});
