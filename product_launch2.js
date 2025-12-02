// Add to cart animation & message
function addToCart() {
  const cartStatus = document.getElementById("cart-status");
  cartStatus.textContent = "Item added to cart! Proceed to checkout.";
  cartStatus.style.display = "block";
  cartStatus.style.backgroundColor = "#d1fae5";
  cartStatus.style.color = "#065f46";
  cartStatus.style.border = "1px solid #065f46";
}

// Change product image color
function changeColor(colorName) {
  console.log("Color switched to:", colorName);

  const productImage = document.getElementById("product-image");
  const currentColorText = document.getElementById("current-color");

  productImage.src = `https://placehold.co/400x400/1e3a8a/f0f0f0?text=Product+${colorName.toUpperCase()}`;
  currentColorText.textContent = colorName;
}

// Event listeners after page loads
window.onload = function () {
  const nextProductSpan = document.getElementById("next-product-span");

  nextProductSpan.addEventListener("click", () => {
    alert("Viewing next product (non-focusable)");
  });
};
