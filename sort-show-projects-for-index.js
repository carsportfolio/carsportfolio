document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.project-container'); /* select the container holding the project items */
    if (!container) {
        console.error('Container not found');
        return;
    }

    const boxes = Array.from(container.querySelectorAll('.project-item')); /* convert to array */
    console.log('Boxes:', boxes);

    function shuffleArray(array) { /* fisher yates shuffle function */
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); /* randomize * length */
            [array[i], array[j]] = [array[j], array[i]]; /* destructuring to reassign new array / swap */
        }
    }

    function storeCurrentOrder(array) { /* stores the order of the projects prior to clicking one in case of return button to minimize confusion */
        const order = array.map(box => box.outerHTML);
        sessionStorage.setItem('currentOrder', JSON.stringify(order));
    }

    function storeProjectOrder(array) {
        const projectUrls = array.map(box => box.querySelector('.project-link').getAttribute('href'));
        sessionStorage.setItem('jumbledProjects', JSON.stringify(projectUrls));
    }

    function restoreCurrentOrder() {
        const currentOrder = sessionStorage.getItem('currentOrder');
        if (currentOrder) {
            const orderArray = JSON.parse(currentOrder);
            container.innerHTML = orderArray.join('');
        }
    }

    if (sessionStorage.getItem('currentOrder')) { /* check if there's a stored order */
        restoreCurrentOrder(); /* restore the saved order */
    } else { /* if no stored order, shuffle and display items */
        shuffleArray(boxes);
        container.innerHTML = ''; /* clear the container */
        boxes.forEach(box => container.appendChild(box)); /* append shuffled items */
        storeCurrentOrder(boxes); /* save the new shuffled order */
        storeProjectOrder(boxes);
    }
});