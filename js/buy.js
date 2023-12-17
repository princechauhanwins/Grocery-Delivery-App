document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => displayProductDetail(product))
        .catch(error => console.error('Error fetching the product detail:', error));

    function displayProductDetail(product) {
        const detailContent = document.getElementById('detailContent');
        const detailCard = document.createElement('article');
        detailCard.classList.add('card');
        const userName = localStorage.getItem("name");
        const userAddress = localStorage.getItem("address");
        detailCard.innerHTML = `
        <div class="container">
        <div class="body-section">
            <div class="row">
                <div class="col-6">
                    <p class="sub-heading">Full Name:
                    ${userName}
                  </p>
                    <p class="sub-heading">Address: <script>
                    ${userAddress}
                  </script> </p>
                </div>
            </div>
        </div>

        <div class="body-section">
            <h3 class="heading">Ordered Items</h3>
            <br>
            <table class="table-bordered" id="tbl">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th class="w-20">Price</th>
                        <th class="w-20">Quantity</th>
                        <th class="w-20">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${product.title}</td>
                        <td>$ ${product.price}</td>
                        <td>1</td>
                        <td>$ ${product.price}<td>
                    </tr>
                </tbody>
            </table><br>
            <button onclick="pay()" class="btn btn-info offset-9 col-2">Pay</button>
        </div>      
    </div>
 `;
        detailContent.appendChild(detailCard);
    }
});

function pay(){
    alert("Payment Successful");
    window.location.href="home.html";
}