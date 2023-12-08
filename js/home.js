 // List All Product
 
 let pro = document.getElementById('productTitle');

 fetch ('https://fakestoreapi.com/products')
 .then(Response=>Response.json())
 .then (data=>productData(data))
 .catch(error=>console.error('error fathing the data:',error));

 function productData(products)
 {
  products.slice(0,20).forEach(product=>{
    let card=document.createElement('article')
    card.classList.add('card');
    card.innerHTML=
    `
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <h4>$${product.price}</h4>
  <button onclick="showDetail(${product.id})" clas="btn btn-info">Detail</button>
    `;
    pro.appendChild(card);
  });
 }


 // Show detail of selected product on the bottom of the home page

 let productDetail=document.getElementById("productDetail");

 function showDetail(productId){
  fetch (`https://fakestoreapi.com/products/${productId}`)
 .then(Response=>Response.json())
 .then(product=>{
  let card=document.createElement('article')
  card.classList.add('card');
  card.innerHTML=`
  <h2>Product Detail:-</h2>
  <img src="${product.image}">
  <h3>${product.title}</h3>
  <h4>$${product.price}</h4>
  <p>${product.description}</p>
  <button onclick="addToCart(${product.id})" clas="btn btn-secondry">Add To Cart</button><br>
  <a href="invoice.html"><button clas="btn btn-secondry">Buy</a></button>
  `;
 productDetail.appendChild(card);
})
 .catch(error=>console.error('error fathing the Detail:',error));
 }


 // Show detail of product added to the cart on the bottom of the home page

 let tbl=document.getElementById("tbl");
 function addToCart(productId)
 {
  fetch (`https://fakestoreapi.com/products/${productId}`)
  .then(Response=>Response.json())
  .then(product=>{
    let card=document.createElement('article')
    card.classList.add('card');
    card.innerHTML=`
  <h2>Cart</h2>
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <h4>$${product.price}</h4>
    <p>${product.description}</p>
    <a href="invoice.html"><button clas="btn btn-secondry">Buy</a></button>
    `;
   tbl.appendChild(card);
  })
  .catch(error=>console.error('error fathing the Detail:',error));
 } 

 
