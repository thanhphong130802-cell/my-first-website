// 1. Lấy dữ liệu từ "cái túi" LocalStorage mà trang Home đã gửi
const productName = localStorage.getItem('selectedProductName');

// 2. Tìm thẻ div để hiển thị
const detailContainer = document.getElementById('product-detail');

if (productName) {
    // 3. Hiển thị nội dung ra màn hình
    detailContainer.innerHTML = `
        <div class="detail-content">
            <div class="detail-img" style="background-color: #e0e0e0; width: 400px; height: 400px;"></div>
            <div class="detail-info">
                <h1>${productName}</h1>
                <p class="price">Special price: $199</p>
                <p class="desc">This is the detailed description of the product ${productName}. This product features a modern PSB style, suitable for all activities.</p>
                <button class="btn-add">Add to cart</button>
            </div>
        </div>
    `;
} else {
    detailContainer.innerHTML = "<p>No products found!</p>";
}