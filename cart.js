/* cart.js */
document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  const products = {
    '1': { name: 'The Estelle Necklace', price: 120 },
    '2': { name: 'The Lulu Bracelet', price: 95 },
    '3': { name: 'The Cora Ring', price: 75 },
    '4': { name: 'The Milan Earrings', price: 80 },
    '5': { name: 'The Alisa Arm Cuff', price: 110 },
    '6': { name: 'The Ariel Watch', price: 180 },
    '7': { name: 'The Avery Necklace', price: 120 },
    '8': { name: 'The Elara Earrings', price: 85 },
    '9': { name: 'The Elodie Necklace', price: 115 },
    '10': { name: 'The Luna Arm Cuff', price: 100 },
    '11': { name: 'The Maya Bracelet', price: 80 },
    '12': { name: 'The Fay Earrings', price: 90 },
    '13': { name: 'The Lorelei Ring', price: 70 },
    '14': { name: 'The Iris Ring', price: 75 },
    '15': { name: 'The Jadis Watch', price: 200 }
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach((id, index) => {
      const product = products[id];
      if (product) {
        total += product.price;

        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          ${product.name} - R${product.price}.00
          <button onclick="removeItem(${index})" style="margin-left: 10px;">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
      }
    });

    cartTotal.innerText = `Total: R${total}.00`;
  }

  window.removeItem = function(index) {
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  };

  renderCart();
});
