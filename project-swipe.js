document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('project-infofade');
    const paragraphs = document.querySelectorAll('.paragraph-project');
    const paragraphsContainer = document.querySelector('.scrolling-content-project');
    const dots = document.querySelectorAll('.scroll-indicator-project .dot-project');
    const numParagraphs = paragraphs.length;
    let currentIndex = 0;
    let isScrolling = false;
    let goingForward = true;

    const updateParagraph = (index) => {
        const height = box.clientHeight;
        paragraphsContainer.style.transform = `translateY(-${index * height}px)`;
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 600);

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const handleScroll = (event) => {
        if (isScrolling) return;

        const delta = event.deltaY;

        if (Math.abs(delta) > 50) {
            if (delta > 0) { /* down */
                if (currentIndex < numParagraphs - 1) {
                    currentIndex++;
                    goingForward = true;
                } else {
                    goingForward = false;
                    currentIndex--;
                }
            } else if (delta < 0) { /* up */
                if (currentIndex > 0) {
                    currentIndex--;
                    goingForward = false;
                } else {
                    goingForward = true;
                    currentIndex++;
                }
            }
            updateParagraph(currentIndex);
        }
        event.preventDefault();
    };

    const handleClick = () => {
        if (isScrolling) return;

        if (goingForward) {
            if (currentIndex < numParagraphs - 1) {
                currentIndex++;
            } else {
                goingForward = false;
                currentIndex--;
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                goingForward = true;
                currentIndex++;
            }
        }
        updateParagraph(currentIndex);
    };

    updateParagraph(currentIndex);

    box.addEventListener('wheel', handleScroll);
    box.addEventListener('click', handleClick);
});
