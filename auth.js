/* auth.js */
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      alert('Login successful (demo only)');
      window.location.href = 'index.html';
    });
  }
});

