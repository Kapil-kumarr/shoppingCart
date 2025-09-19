document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 29.99 },
  ];

  let cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");
  let totalPriceValue = 0;
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("mb-3");
    productDiv.classList.add("bg-gray-700");
    productDiv.classList.add("p-2");
    productDiv.classList.add("rounded");
    productDiv.classList.add("flex");
    productDiv.classList.add("justify-between");
    productDiv.classList.add("items-center");
    productDiv.innerHTML += `
        <span class="">${product.name} - $${product.price.toFixed(2)}</span>
        <button class="bg-purple-800 px-2 py-1 rounded" data-id="${
          product.id
        }">Add to Cart</button>
        `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      //   console.log(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    if (cart.length) {
      cartItems.innerText = "";
      const cartDiv = document.createElement("div");
      cartDiv.classList.add("mt-3");
      cartDiv.classList.add("flex");
      cartDiv.classList.add("flex-col");
      cartDiv.classList.add("text-white");
      cart.forEach((item) => {
        cartDiv.innerHTML += `
                <span>${item.name} - $${item.price}</span>
            `;
      });
      totalPriceValue = cart.reduce((sum, item) => (sum = sum + item.price), 0);
      totalPrice.innerHTML = `$${totalPriceValue}`;
      cartItems.appendChild(cartDiv);
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartItems.innerHTML = `<p id="empty-cart" class="text-white text-sm mt-3">Your cart is empty!</p>`;
      totalPrice.innerHTML = `$${totalPriceValue}`;
      emptyCartMessage.classList.remove("hidden");
    }
  }

  checkoutBtn.addEventListener("click", () => {
    alert("checkout successfull!");
    totalPriceValue = 0;
    cart = [];
    renderCart();
  });
});
