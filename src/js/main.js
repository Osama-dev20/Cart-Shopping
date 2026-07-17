const cartIcon = document.querySelector("#cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const Xclose = document.querySelector(".cart-close");

const cartContent = document.querySelector(".cart-content");
const addCartBtn = document.querySelectorAll(".add-cart");
const Counter = document.getElementById("counter");

// فتح وإغلاق السلة
cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

Xclose.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

// تحديث عداد السلة
const updateCounter = () => {
    const cartCount = cartContent.querySelectorAll(".cart-box").length;

    Counter.textContent = cartCount;
    Counter.style.visibility = cartCount > 0 ? "visible" : "hidden";
};

// إضافة المنتج للسلة
addCartBtn.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".Product-box");
        addToCart(productBox);
    });
});

const addToCart = productBox => {

    const productImg = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".Product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    // منع التكرار
    const cartItems = cartContent.querySelectorAll(".cart-product-title");

    for (const item of cartItems) {
        if (item.textContent === productTitle) {
            alert("This product is already in the cart.");
            return;
        }
    }

    // إنشاء المنتج داخل السلة
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");

    cartBox.innerHTML = `
        <img src="${productImg}">

        <div class="cart-detail">
            <h5 class="cart-product-title">${productTitle}</h5>

            <span class="cart-product-price">${productPrice}</span>

            <div class="cart-quantity">
                <button class="decrement">-</button>
                <span class="number">1</span>
                <button class="increment">+</button>
            </div>
        </div>

        <i class="ri-delete-bin-line cart-remove"></i>
    `;

    cartContent.appendChild(cartBox);

    // حذف المنتج
    const cartRemove = cartBox.querySelector(".cart-remove");

    cartRemove.addEventListener("click", () => {
        cartBox.remove();
        updateCounter();
        TotalPrice();
    });

    // عناصر الكمية
    const decrement = cartBox.querySelector(".decrement");
    const increment = cartBox.querySelector(".increment");
    const number = cartBox.querySelector(".number");

    // إنقاص الكمية
    decrement.addEventListener("click", () => {

        let quantity = Number(number.textContent);

        if (quantity > 1) {
            quantity--;
        }

        number.textContent = quantity;

        TotalPrice();
    });

    // زيادة الكمية
    increment.addEventListener("click", () => {

        let quantity = Number(number.textContent);

        quantity++;

        number.textContent = quantity;

        TotalPrice();
    });

    updateCounter();
    TotalPrice();
};

// حساب السعر الكلي
const TotalPrice = () => {

    const totalPrice = document.querySelector(".total-price");

    const cartBoxes = document.querySelectorAll(".cart-box");

    let total = 0;

    cartBoxes.forEach(cartBox => {

        const price = Number(
            cartBox
                .querySelector(".cart-product-price")
                .textContent.replace("$", "")
        );

        const quantity = Number(
            cartBox.querySelector(".number").textContent
        );

        total += price * quantity;
    });

    totalPrice.textContent = `$${total}`;
};