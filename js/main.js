let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let user = localStorage.getItem('username');
let logoutBtn = document.querySelector('#logout');

if(localStorage.getItem('username')) {
    links.remove();
    userInfo.style.display = 'flex';
    userDom.innerHTML =  `Hi ${user.charAt(0).toUpperCase() + user.slice(1)}`;
}

logoutBtn.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = 'login.html';
    });
});


// Define Prodcut
let productItems = document.querySelector('.product-itmes');
let prodcuts = [
    {
        id: 1,
        title: "Thermo Ball Etip Gloves",
        price: "$ 45,743",
        imageUrl: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
    },
    {
        id: 2,
        title: "Thermo Ball Etip Gloves",
        price: "$ 45,743",
        imageUrl: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
    },
    {
        id: 3,
        title: "Thermo Ball Etip Gloves",
        price: "$ 45,743",
        imageUrl: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
    },
];

function drawProductsUI () {
    let productUI = prodcuts.map( item => {
        return `
            <div class="item">
              <div class="image">
                <img
                  src="${item.imageUrl}"
                  alt="${item.title}"
                />
                <div class="icons">
                  <i class="fas fa-shopping-cart" onclick="addedToCart(${item.id})"></i>
                  <i class="fas fa-heart"></i>
                </div>
              </div>
              <p>${item.title}</p>
              <span class="price">${item.price}</span>
            </div>
        `;
    });
    productItems.innerHTML = productUI.join('');
}
drawProductsUI();

// Check If User Has An Account
function CheckIfUserHasAccount() {
    if(localStorage.getItem('username')) {
        window.location = 'checkout.html';
    } else {
        window.location = 'login.html';
    }
}

// Added To Cart 
function addedToCart(id) {
    let choosenItem = prodcuts.filter(item => item.id === id);
    console.log(choosenItem);
}