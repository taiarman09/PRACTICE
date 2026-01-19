// Product Data
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: "15,999",
        img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/c/y/-original-imah57jbfqsz6797.jpeg?q=70"
    },
    {
        id: 2,
        name: "Headphones",
        price: "1,299",
        img: "https://rukminim2.flixcart.com/image/612/612/l55nekw0/headphone/9/d/j/-original-imagfyg5sx8ugvkq.jpeg?q=70"
    },
    {
        id: 3,
        name: "Shoes",
        price: "999",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/w/j/6-elite-wht-eliteshoes-white-original-imahfh9jzz8nqnlz.jpeg?q=70"
    }
];

let cart = [];

// Load Products in UI
const productSection = document.getElementById("productSection");

products.forEach(product => {
    productSection.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

// Add to Cart Function
function addToCart(id){
    const item = products.find(p => p.id === id);
    cart.push(item);
    renderCart();
}

// Show Cart Items
function renderCart(){
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div style="margin-bottom:10px;">
                <strong>${item.name}</strong> - ₹${item.price}
            </div>
        `;
    });
}

// Open Cart
document.getElementById("openCart").addEventListener("click", () => {
    document.getElementById("cartSidebar").style.right = "0";
});

// Close Cart
document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartSidebar").style.right = "-100%";
});
