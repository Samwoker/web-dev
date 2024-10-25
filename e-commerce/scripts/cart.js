document.addEventListener("DOMContentLoaded", () => {
  const productName = localStorage.getItem("title");
  const price = localStorage.getItem("price");
  const imageSrc = localStorage.getItem("imageSrc");

  if (productName && price && imageSrc) {
    document.getElementById("product-name").textContent = productName;
    document.querySelector(".price").textContent = `Price: $${parseFloat(
      price
    ).toFixed(2)}`;
    document.getElementById("image").src = imageSrc;
    document.querySelector(".quantity").textContent = "Quantity: 1";
    document.querySelector(".total").textContent = `Total: $${parseFloat(
      price
    ).toFixed(2)}`;
  } else {
    document.querySelector(".cart-details ul").innerHTML =
      "<li>No items in the cart</li>";
  }

  const removeBtn = document.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => {
    localStorage.removeItem("title");
    localStorage.removeItem("price");
    localStorage.removeItem("imageSrc");

    document.querySelector(".cart-details ul").innerHTML =
      "<li>No items in the cart</li>";
      window.dispatchEvent(new CustomEvent("storage"));
  });

  const checkoutBtn = document.querySelector(".checkout");
  checkoutBtn.addEventListener("click", () => {
    // const price=document.querySelector(".price").textContent;
    // const totalPrice=document.querySelector("#Total").textContent;
    // const imageUrl = document.querySelector("#image").src;
    // const quantity = document.querySelector(".quantity").textContent;
    // const productName = document.querySelector("#product-name").textContent;

    localStorage.setItem("price", price);
    // localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("imageUrl", imageSrc);
    // localStorage.setItem("quantity", quantity);
    localStorage.setItem("productName", productName);
    window.location.href = "checkout.html";
  });
});
