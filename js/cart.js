document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => cartProduct(product))
        .catch(error => console.error('Error fetching the product detail:', error));

    function cartProduct(product) {
        let addtocart=document.getElementById("addtocart");
        const addcart = document.createElement('article');
        addcart.classList.add('card');
        addcart.innerHTML = `
        <div class="card mb-3" style="max-width: 750px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${product.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${product.title}</h3><br>
              <h4 class="card-title">Price:- $ ${product.price}</h4></br>
            <button onclick="productBuy(${product.id})" class="btn btn-info">Buy</button>
            </div>
          </div>
        </div>
      </div>
        `;
        addtocart.appendChild(addcart);
    }
    window.productBuy = function(productId) {
        window.location.href = `invoice.html?id=${productId}`;
    };
});