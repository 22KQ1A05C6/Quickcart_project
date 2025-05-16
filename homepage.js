fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products-container');

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <h5>${product.name}</h5>
          <p>$${product.price}</p>
          <button>Buy Now</button>
        </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Failed to load products:', error);
  });



 // Observer to animate cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Make sure to call after DOM elements are added
setTimeout(() => {
  document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}, 100); // Slight delay to allow DOM rendering
