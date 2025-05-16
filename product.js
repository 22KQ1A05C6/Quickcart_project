// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// Fetch product data from JSON
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const product = products.find(p => p.id === productId);

    if (product) {
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-image').alt = product.name;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('product-price').textContent = `${product.price}`;
    } else {
      document.getElementById('product-container').innerHTML = '<p>Product not found.</p>';
    }
  })
  .catch(error => {
    console.error('Error loading product data:', error);
    document.getElementById('product-container').innerHTML = '<p>Error loading product details.</p>';
  });
