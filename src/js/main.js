cartIcon = document.querySelector("#cart-icon")
cartSidebar = document.querySelector(".cart-sidebar")
Xclose = document.querySelector(".cart-close")

cartIcon.addEventListener("click", () =>{
  cartSidebar.classList.add("active")
});

Xclose.addEventListener("click", () => {
  cartSidebar.classList.remove("active")    
})




