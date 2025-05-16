// navbar.js
fetch('navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html;

    // Handle Login/Logout
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    const welcomeMsg = document.getElementById('welcomeMessage');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (welcomeMsg && loginBtn && logoutBtn) {
      if (isLoggedIn) {
        welcomeMsg.textContent = `Welcome, ${username}`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
      } else {
        welcomeMsg.textContent = 'Hello, Guest!';
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
      }

      loginBtn.addEventListener('click', () => window.location.href = 'login.html');
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('cart');
        location.reload();
      });
    }

    // Search form logic
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
      });
    }
  });
