document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.project-details-container');
    const boxes = Array.from(container.querySelectorAll('.project-details'));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }
    shuffleArray(boxes);
    container.innerHTML = '';
    boxes.forEach(box => container.appendChild(box));
});