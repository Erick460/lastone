document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    const modal = document.getElementById('poster-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    const openModal = (title, image, text) => {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalText.textContent = text;
        modal.classList.remove('hidden');
    };

    const closeModal = () => {
        modal.classList.add('hidden');
    };

    newsItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.dataset.title;
            const image = item.dataset.image;
            const text = item.dataset.text;
            openModal(title, image, text);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});