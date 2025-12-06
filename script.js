let previewContainer = document.querySelector('.products-preview');
let previewBoxes = document.querySelectorAll('.products-preview .preview');


document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', (event) => {
        let product = img.closest('.product'); 
        let name = product.getAttribute('data-name');

        previewContainer.style.display = 'flex';

        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            preview.classList.remove('active');
            if (name === target) {
                preview.classList.add('active');
            }
        });
    });
});

//  close button
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        previewContainer.style.display = 'none';
        previewBoxes.forEach(preview => preview.classList.remove('active'));
    });
});
