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
  <img src="${product.image}">
  <h3>${product.title}</h3>
  <h4>$${product.price}</h4>
  <p>${product.description}</p>
  `;
 window.location.href = `productDetail.html?id=${productId}`;
})
 .catch(error=>console.error('error fathing the Detail:',error));
 }

