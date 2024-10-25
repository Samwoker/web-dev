document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    function updateCheckoutPage(){
    const priceText = localStorage.getItem("price");
    const imageUrl = localStorage.getItem("imageSrc");
    const productName = localStorage.getItem("productName");

    // Check if data exists in localStorage and update DOM
    if (priceText && imageUrl && productName) {
        const price = parseFloat(priceText.replace("$", "")) || 0;

        // Find the necessary elements
        const productNameElement = document.getElementById('product-name');
        const priceElement = document.getElementById('price');
        const imageElement = document.getElementById('imageSrc');

        // Ensure the elements exist before attempting to update them
        if (productNameElement && priceElement && imageElement) {
            // Update the elements with the retrieved values
            productNameElement.textContent = productName;
            priceElement.textContent = `Price: $${price.toFixed(2)}`;
            imageElement.src = imageUrl;
        }
    } else {
        // If data is missing, show a message
        const checkoutDetail = document.querySelector('.checkout-detail div ul');
        if (checkoutDetail) {
            checkoutDetail.innerHTML = "<li>Items not added to checkout</li>";
        }
    }
}

updateCheckoutPage();



window.addEventListener('storage',()=>{
    // Update the checkout page when data is updated in localStorage
    updateCheckoutPage();
 // Clear Cart button functionality
})
   
    const remove = document.querySelector('.remove');
    if (remove) {
        remove.addEventListener('click', () => {
            // Clear stored data
            localStorage.removeItem('productNameElement');
            localStorage.removeItem('priceElement');
            localStorage.removeItem('imageElement');

            // Update UI to show empty cart message
            const checkoutDetail = document.querySelector('.checkout-detail div ul');
            if (checkoutDetail) {
                checkoutDetail.innerHTML = "<li>Items not added to checkout</li>";
            }

            alert('Cart has been cleared.');
        });
    }
});
