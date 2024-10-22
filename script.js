function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    
    modal.style.display = "block";
    modalImage.src = image.src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
