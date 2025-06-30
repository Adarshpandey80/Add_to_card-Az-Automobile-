import product  from "./product1.js";  
 

let form = document.getElementById("List_form");
form.style.display = "none";

console.log(product);
let prodcar = document.getElementById("prodcar");
let prodcycle = document.getElementById("prodcycle");

console.log(prodcar);
console.log(prodcycle);


function renderProducts() {
    prodcar.innerHTML = product.map((item) => {
        return `
         <div  class="product">
                <h3>Product Name</h3>
                <img src="${item.Image}" alt="" width="200px" height="150px">
                <h3>Price:${item.Price}</h3>
                <button onclick="addproduct(${item.Price})">Add </button>
                 <button onclick="discardproduct(${item.Price})">Sub</button>
            </div>
        `;
    }).join('');
}

renderProducts();





window.newlistings = () => {
    form.style.display = "block";
};

window.addlist = () => {
    let user_id = parseInt(document.getElementById("id").value);
    let user_img = document.getElementById("img").value;
    let price = parseInt(document.getElementById("price").value);

    let listobj = {
        id: user_id,
        Image: user_img,
        Price: price,
    };

    product.push(listobj);
    renderProducts();

    document.getElementById("id").value = "";
    document.getElementById("img").value = "";
    document.getElementById("price").value = "";
};