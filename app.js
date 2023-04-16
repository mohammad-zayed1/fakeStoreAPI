const main = document.getElementById("main");
// const products = [];
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     for(let i = 0 ; i < 20 ; i++){
//         let title = data[i].title;
//         let price = data[i].price;
//         let description = data[i].description;
//         let image = data[i].image;
//         let card = new GenerateProduct(title, price, description, image);
//         products.push(card);
//     }
//   });

// function GenerateProduct(title, price, description, image) {
//   this.title = title;
//   this.price = price;
//   this.description = description;
//   this.image = image;
// }

// console.log(products[0][title]);

// products.map((product)=>{
// let card = document.createElement('div')
// card.className = 'card';

// let img = document.createElement('img');
// img.className = 'prodImg';
// img.setAttribute('src' , prodInfo.image)

// let productTitle =document.createElement('h3');
// productTitle.className = 'title';
// productTitle.textContent = `${prodInfo.title}`;

// let productDesc =document.createElement('p');
// productDesc.className = 'description';
// productTitle.textContent = prodInfo.description;

// let productPrice = document.createElement('p');
// productPrice.className = 'price';
// productPrice.textContent = prodInfo.price;
// console.log('true');

// card.appendChild(img);
// card.appendChild(productTitle);
// card.appendChild(productDesc);
// card.appendChild(productPrice);
// main.innerHTML=card;
//     `
//     <div class="card">
//     <img src="${product.image}" alt="${product.title}">
//     <h2>${product.title}</h2>
//     <p>${product.description}</p>
//     <p>$${product.price}</p>
//   </div>
//   `
//   main.innerHTML = productCards.join('');

// })
// console.log(products[0]);

// Constructor to create product objects
function Product(title, price, description, image) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}

// Hit the provided API and read the data from it using the fetch method
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Create 20 objects from the retrieved data
    const products = [];
    for (let i = 0; i < 20; i++) {
      const { title, price, description, image } = data[i];
      const product = new Product(title, price, description, image);
      products.push(product);
    }

    // Loop through the array using map() and create a card for each object to render in the main
    const main = document.querySelector("main");
    const productCards = products.map(
      (product) => `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <h3>$${product.price}</h3>
        </div>
      `
    );
    main.innerHTML = productCards.join("");
  })
  .catch((error) => console.error(error));
