function addToCart(item, price) {
  const message = document.getElementById("cart-message");
  message.innerText = `${item} added to cart for ₹${price}`;
  message.style.opacity = "1";

  setTimeout(() => {
    message.style.opacity = "0";
  }, 3000);
}
