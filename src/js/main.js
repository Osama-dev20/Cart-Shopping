cartIcon = document.querySelector("#cart-icon")
cartSidebar = document.querySelector(".cart-sidebar")
Xclose = document.querySelector(".cart-close")

cartIcon.addEventListener("click", () =>{
  cartSidebar.classList.add("active")
});

Xclose.addEventListener("click", () => {
  cartSidebar.classList.remove("active")    
})


cartContent = document.querySelector(".cart-content")
addCartBtn = document.querySelectorAll(".add-cart")   // More than one element
addCartBtn.forEach(button => {
  button.addEventListener("click", event => {
     const productBox = event.target.closest(".Product-box")
     addtoCart(productBox)
  });
});

const addtoCart = productBox => {
  const productImg = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".Product-title").textContent;
  const productPrice = productBox.querySelector(".price").textContent

  const cartBox = document.createElement("div")
  cartBox.classList.add("cart-box")
  cartBox.innerHTML = `
                 <img src="${productImg}" >
              <div class="cart-detail">
                   <h5 class="cart-product-title">${productTitle}</h5>
                   <span class="cart-product-price">${productPrice}</span>
                   <div class="cart-quantity">
                     <button id="decrement">-</button>
                     <span class="number">0</span>
                     <button id="increment">+</button>
                   </div>
              </div>
               <i class="ri-delete-bin-line cart-remove"></i>
  
  `;
  cartContent.appendChild(cartBox);
}




