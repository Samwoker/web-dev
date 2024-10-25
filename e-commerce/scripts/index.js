
document.addEventListener('DOMContentLoaded',()=>{

const addToCartBtn=document.querySelectorAll('.add-to-cart');

addToCartBtn.forEach(btn=>{

  btn.addEventListener('click',(e)=>{

    const card=e.target.closest('.card');

    const title=card.querySelector('.card-title').textContent || "No title";
    const priceText=card.querySelector('.price').textContent;
    const imageSrc=card.querySelector('.card-images').src;
  
    const price=parseFloat(priceText.replace("$",""));

    localStorage.setItem('title', title);
    localStorage.setItem('price', price);
    localStorage.setItem('imageSrc', imageSrc);

    window.location.href="cart.html";

  });
});
});