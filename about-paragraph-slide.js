document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('scrollableBox');
    const paragraphs = document.querySelectorAll('.paragraph');
    const paragraphsContainer = document.querySelector('.scrolling-content');
    const eliminate = document.getElementById('aborder-header');
    const dots = document.querySelectorAll('.scroll-indicator .dot'); 
    const numParagraphs = paragraphs.length;
    let currentIndex = 0;
    let isScrolling = false;
    let goingForward = true;

    const scrollThreshold = 300; // time in ms between scroll events
    const scrollDelta = 50; // amount of scroll needed to change paragraphs

    const updateParagraph = (index) => {
                const height = box.clientHeight;
                paragraphsContainer.style.transform = `translateY(-${index * height}px)`;
                isScrolling = true;
                setTimeout(() => { isScrolling = false; }, scrollThreshold);

                if (index === 0) {
                    eliminate.classList.remove('hidden');
                    eliminate.classList.add('ease-in-hidden');
                    paragraphsContainer.style.transition = 'transform 0.6s ease-in-out 0s';
                    eliminate.textContent = "Hi, I'm Carson!";
                } else if (index === 2) {
                    eliminate.classList.remove('hidden');
                    eliminate.classList.add('ease-in-hidden');
                    paragraphsContainer.style.transition = 'transform 0.6s ease-in-out .45s';
                    eliminate.textContent = "Click Me!";
                } else {
                    eliminate.classList.add('hidden');
                    eliminate.classList.remove('ease-in-hidden');
                    paragraphsContainer.style.transition = 'transform 0.6s ease-in-out .45s';
                }

                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            };

    const handleScroll = (event) => {
        if (isScrolling) return;

        const delta = event.deltaY;

        if (Math.abs(delta) > scrollDelta) {
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