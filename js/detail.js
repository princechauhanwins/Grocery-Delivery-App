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
        detailCard.innerHTML = `
        <div class="card mb-3" style="max-width: 750px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${product.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${product.title}</h3><br>
        <h4 class="card-title">Price:- $ ${product.price}</h4>
        <p class="card-text"><b>Description:</b>${product.description}</p>
        <h5 class="card-text">Rating:${product.rating.rate}</h5>
        <button onclick="addToCart(${product.id})" class="btn btn-info">Add To Cart</button>
      </div>
    </div>
  </div>
</div>
 `;
        detailContent.appendChild(detailCard);
    }

    window.addToCart = function(productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const addcart = document.createElement('article');
                addcart.classList.add('card');
                addcart.innerHTML = `
                    <img src="${product.image}">
                    <h3>${product.title}</h3>
                    <h4>Price: $${product.price}</h4>
                    <button onclick="buyProduct()" class="btn btn-info">Buy</button>
                `;
            })
            .catch(error => console.error('Error fetching the product detail:', error));

        // Redirect to the cart page
        window.location.href = `cart.html?id=${productId}`;
    };
});
