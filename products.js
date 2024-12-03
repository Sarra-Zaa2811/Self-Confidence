//barre de recherche
function filterProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const title = product.querySelector('h5').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
//voir plus
function toggleProducts() {
    const extraProducts = document.querySelectorAll('.extra-products');
    const seeMoreBtn = document.getElementById('see-more-btn');
    extraProducts.forEach(product => {
        product.style.display = product.style.display === 'none' ? 'block' : 'none';
    });
    seeMoreBtn.textContent = seeMoreBtn.textContent === 'Voir plus' ? 'Voir moins' : 'Voir plus';
}
