const products = [
    { id: 1, name: "Product1", price: "$300", img: "#e0e0e0" },
    { id: 2, name: "Product2", price: "$850", img: "#d0d0d0" },
    { id: 3, name: "Product3", price: "$600", img: "#c0c0c0" },
    { id: 4, name: "Product4", price: "$450", img: "#b0b0b0" }
];
const productContainer = document.getElementById('product-list');
function displayProducts() {
    productContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-img" style="background-color: ${product.img}"></div>
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="btn-add">Add to cart</button>
        </div>
    `).join('');
}
displayProducts();
let count = 0; // Biến lưu số lượng hàng
const cartNumber = document.getElementById('cart-count');

// Lắng nghe sự kiện click trên toàn bộ trang web
document.addEventListener('click', function (event) {
    // Nếu cái người dùng vừa click vào có class là 'btn-add'
    if (event.target.classList.contains('btn-add')) {
        count++; // Tăng số lượng lên 1
        cartNumber.innerText = count; // Cập nhật số mới lên màn hình
        alert("Great! You've just added a product to your cart..");
    }
});
// Sửa hàm vẽ sản phẩm một chút:
function displayProducts() {
    productContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-img" style="background-color: ${product.img}"></div>
            <h3 onclick="viewDetail('${product.name}')" style="cursor:pointer">${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="btn-add">Add to cart</button>
        </div>
    `).join('');
}

// Hàm chuyển trang
function viewDetail(name) {
    // Lưu tên sản phẩm vào bộ nhớ trình duyệt để sang trang kia đọc lại
    localStorage.setItem('selectedProductName', name);
    window.location.href = 'detail.html'; // Chuyển trang
}
// Tạo một mảng giỏ hàng rỗng
let cart = JSON.parse(localStorage.getItem('myCart')) || [];

function addToCart(productId) {
    // Tìm sản phẩm trong danh sách dựa trên ID
    const product = products.find(p => p.id === productId);

    // Thêm vào mảng giỏ hàng
    cart.push(product);

    // Lưu mảng này vào LocalStorage (phải dùng JSON.stringify)
    localStorage.setItem('myCart', JSON.stringify(cart));

    alert("Added " + product.name + " to cart!");
}