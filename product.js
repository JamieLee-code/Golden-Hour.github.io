/* product.js */
document.addEventListener('DOMContentLoaded', () => {
  const productDetail = document.getElementById('productDetail');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const products = [
    { id: '1', name: 'The Estelle Necklace', price: 'R120.00', image: 'estelle-necklace.jpg.jpg', desc: '3pc layered star gold necklace.' },
    { id: '2', name: 'The Lulu Bracelet', price: 'R95.00', image: 'lulu-bracelet.jpg.jpg', desc: '2pc pearl gold bracelet.' },
    { id: '3', name: 'The Cora Ring', price: 'R75.00', image: 'cora-ring.jpg.jpg', desc: 'engraved heart gold ring.' },
    { id: '4', name: 'The Milan Earrings', price: 'R80.00', image: 'milan-earrings.jpg.jpg', desc: 'twisted style gold hoop earrings.' },
    { id: '5', name: 'The Alisa Arm Cuff', price: 'R110.00', image: 'alisa-arm-cuff.jpg.jpg', desc: '1pc gold adjustable armband.' },
    { id: '6', name: 'The Ariel Watch', price: 'R180.00', image: 'ariel-watch.jpg.jpg', desc: 'square faced gold metal watch.' },
    { id: '7', name: 'The Avery Necklace', price: 'R120.00', image: 'avery-necklace.jpg.jpg', desc: '3-charm gold crystal necklace.' },
    { id: '8', name: 'The Elara Earrings', price: 'R85.00', image: 'elara-earrings.jpg.jpg', desc: 'chunky gold hoop earrings.' },
    { id: '9', name: 'The Elodie Necklace', price: 'R115.00', image: 'elodie-necklace.jpg.jpg', desc: 'entangled gold charm necklace.' },
    { id: '10', name: 'The Luna Arm Cuff', price: 'R100.00', image: 'luna-arm-cuff.jpg.jpg', desc: '1pc gold geometric armband.' },
    { id: '11', name: 'The Maya Bracelet', price: 'R80.00', image: 'maya-bracelet.jpg.jpg', desc: 'ocean inspired gold bracelet.' },
    { id: '12', name: 'The Fay Earrings', price: 'R90.00', image: 'fay-earrings.jpg.jpg', desc: 'chunky statement flower gold earrings.' },
    { id: '13', name: 'The Lorelei Ring', price: 'R70.00', image: 'lorelei-ring.jpg.jpg', desc: 'ocean inspired gold ring.' },
    { id: '14', name: 'The Iris Ring', price: 'R75.00', image: 'iris-ring.jpg.jpg', desc: 'abstract wavy gold ring.' },
    { id: '15', name: 'The Jadis Watch', price: 'R200.00', image: 'jadis-watch.jpg.jpg', desc: 'square faced elegant gold metal watch.' },
  ];

  const product = products.find(p => p.id === id);
  if (product) {
    productDetail.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="max-width:300px"><br>
      <h2>${product.name}</h2>
      <p>${product.desc}</p>
      <strong>${product.price}</strong><br>
      <button class="btn" onclick="addToCart('${product.id}')">Add to Cart</button>
    `;
  }
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}
