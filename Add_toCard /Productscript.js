
import product from "./product.js";

let form = document.getElementById("List_form");
form.style.display = "none";

console.log(product);
let prod = document.getElementById("prod");

console.log(prod);

function renderProducts() {
    prod.innerHTML = product.map((item) => {
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

let r = 0;
let total = 0;
let Add_list = document.getElementById("See_list");
Add_list.style.display = "none";

window.addproduct = (price) => {
    Add_list.style.display = "block";
    r = r + price;
    total = total + 1;
    Add_list.innerHTML = `
    <h2>Your List Card</h2>
    <h3>Total Bill: ${r}</h3>
    <h3>Items:${total}</h3>
    `;
};

window.discardproduct = (price) => {
    r = r - price;
    total = total - 1;
    if (total == 0) {
        Add_list.innerHTML = `<h2>No product list</h2>`;
        total = 0;
    } else {
        Add_list.innerHTML = `
        <h2>Your List Card</h2>
        <h3>Total Price: ${r}</h3>
        <h3>Items:${total}</h3>
        `;
    }
};



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


