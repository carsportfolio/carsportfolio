document.addEventListener('DOMContentLoaded', () => {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalClose = document.createElement('span');
    let originalParent = null;

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalClose.classList.add('modal-close');
    modalClose.innerHTML = '&times;';

    modal.appendChild(modalClose);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const showModal = () => {
        modal.style.opacity = '0';
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 200);
    };

    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            if (originalParent) {
                originalParent.querySelector('.zoomable').classList.remove('original-hidden');
            }
        }, 200);
    };

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            if (!modal.classList.contains('show')) {
                originalParent = img.parentElement;
                const zoomedImage = img.cloneNode();
                
                const higherResSrc = img.src.replace('w350', 'w350'); // this can be used eventually to try to make the images bigger without losing quality?
                zoomedImage.src = higherResSrc;

                zoomedImage.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

                modalContent.innerHTML = '';
                modalContent.appendChild(zoomedImage);

                showModal(); 
                img.classList.add('original-hidden');
            }
        });
    });
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    modalContent.addEventListener('click', closeModal);
});
