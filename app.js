const AllProductDetail = JSON.parse(localStorage.getItem("AllProductDetail"));

const menuCards = document.getElementById("menu-cards");

let productData;

for (let i = 0; i < AllProductDetail.length; i++) {


    const product = `
<div class="card">
        <img src="./images/first.jpg" alt="Cappuccino">
        <h3>${AllProductDetail[i].title}</h3>
        <p>${AllProductDetail[i].price}</p>
        <p>${AllProductDetail[i].description}</p>
        <p>${AllProductDetail[i].stock}</p>
        <a href="#" class="btn">Order Now</a>
</div>

`
    console.log(AllProductDetail[i].title, AllProductDetail[i].price, AllProductDetail[i].stock, AllProductDetail[i].description);
    
    productData = product
    
}


// menuCards.appendChild(productData)
// let name1 = "sohail";
// let name2 = "Momin"

// console.log(name1+name2+"ooodd");

// console.log(`${name1}${name2}ddddddddd`);









