function showCategories() {
  const parent = document.querySelector('.categories > div');
  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category.name;
    categoryElement.setAttribute('data-category-id', category.id);
    categoryElement.classList.add('category-item');

    parent.appendChild(categoryElement);
  });
}

function showProducts(products, categoryId) {
  const parent = document.querySelector('.products > div');
  parent.setAttribute('data-category-id', categoryId);

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = product.name;
    productElement.setAttribute('data-products-id', product.id);
    
    productElement.classList.add('product-item');

    parent.appendChild(productElement);
  });
}

document.addEventListener('DOMContentLoaded', showCategories);

document.querySelector('.categories').addEventListener('click', event => {
  if (!event.target.classList.contains('category-item') ) {
    return;
  }

  const categoryId = parseInt(event.target.getAttribute('data-category-id'));
  
  const selectedCategory = categories.find(category => category.id === categoryId);
  if (!selectedCategory) {
    return;
  }

  showProducts(selectedCategory.products, categoryId);
});