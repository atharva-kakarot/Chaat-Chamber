//---------------------------------Making an array of object items------------------------------------------------------------------------

let products = [{
        name: 'Pani Puri Pizzazz',
        price: 200,
        inCart: 0
    },{
        name: 'Sev Puri Sensation',
        price: 40,
        inCart: 0
    },{
        name: 'Special Samosa',
        price: 20,
        inCart: 0
    },{
        name: 'Khasta Kachori Kingdom',
        price: 40,
        inCart: 0
    },{
        name: 'Spice Mix Puff',
        price: 50,
        inCart: 0
    },{
        name: 'Spice Tater Toss',
        price: 50,
        inCart: 0
    },{
        name: 'Creamy Curd Vada',
        price: 30,
        inCart: 0
    },{
        name: 'Creamy Pea Delight',
        price: 50,
        inCart: 0
    },{
        name: 'Yogurt Puff Bites',
        price: 30,
        inCart: 0
    },{
        name: 'Crispy Potato Medley',
        price: 35,
        inCart: 0
    },{
        name: 'Ragda Patties',
        price: 40,
        inCart: 0
    },{
        name: 'Indian Fritters',
        price: 15,
        inCart: 0
    },{
        name: 'Crispy Lentil Nuggets',
        price: 50,
        inCart: 0
    },{
        name: 'Dosa Delight',
        price: 50,
        inCart: 0
    },{
        name: 'Saucy Puff Crunch',
        price: 25,
        inCart: 0
    },{
        name: 'Spice Potato Scoops',
        price: 40,
        inCart: 0
    }
]

//--------------------------------JavaScript for category tabs----------------------------------------------------------------

let classicChaat = document.getElementById("classic-chaats");
let dahiBasedChaat = document.getElementById("dahi-based-chaats");
let tikkiBasedChaat = document.getElementById("tikki-based-chaats");
let friedSnackChaat = document.getElementById("fried-snack-chaats");
let regionalSpecialities = document.getElementById("regional-specialities");

let classicChaatList = document.getElementById("classic-chaats-list");
let dahiBasedChaatList = document.getElementById("dahi-based-chaats-list");
let tikkiBasedChaatList = document.getElementById("tikki-based-chaats-list");
let friedSnackChaatList = document.getElementById("fried-snack-chaats-list");
let regionalSpecialitiesList = document.getElementById("regional-specialities-list");

classicChaat.addEventListener("click", classicChaatFunc);
dahiBasedChaat.addEventListener("click", dahiBasedChaatFunc);
tikkiBasedChaat.addEventListener("click", tikkiBasedChaatFunc);
friedSnackChaat.addEventListener("click", friedSnackChaatFunc);
regionalSpecialities.addEventListener("click", regionalSpecialitiesFunc);

function classicChaatFunc(){
    dahiBasedChaatList.style.display = "none";
    tikkiBasedChaatList.style.display = "none";
    friedSnackChaatList.style.display = "none";
    regionalSpecialitiesList.style.display = "none";
    classicChaatList.style.display = "block";

    classicChaat.style.backgroundColor = "rgb(70, 70, 70)";
    dahiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    tikkiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    friedSnackChaat.style.backgroundColor = "rgb(42, 42, 42)";
    regionalSpecialities.style.backgroundColor = "rgb(42, 42, 42)";
}

function dahiBasedChaatFunc(){
    classicChaatList.style.display = "none";
    tikkiBasedChaatList.style.display = "none";
    friedSnackChaatList.style.display = "none";
    regionalSpecialitiesList.style.display = "none";
    dahiBasedChaatList.style.display = "block";

    dahiBasedChaat.style.backgroundColor = "rgb(70, 70, 70)";
    classicChaat.style.backgroundColor = "rgb(42, 42, 42)";
    tikkiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    friedSnackChaat.style.backgroundColor = "rgb(42, 42, 42)";
    regionalSpecialities.style.backgroundColor = "rgb(42, 42, 42)";
}

function tikkiBasedChaatFunc(){
    classicChaatList.style.display = "none";
    dahiBasedChaatList.style.display = "none";
    friedSnackChaatList.style.display = "none";
    regionalSpecialitiesList.style.display = "none";
    tikkiBasedChaatList.style.display = "block";

    tikkiBasedChaat.style.backgroundColor = "rgb(70, 70, 70)";
    dahiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    classicChaat.style.backgroundColor = "rgb(42, 42, 42)";
    friedSnackChaat.style.backgroundColor = "rgb(42, 42, 42)";
    regionalSpecialities.style.backgroundColor = "rgb(42, 42, 42)";
}

function friedSnackChaatFunc(){
    classicChaatList.style.display = "none";
    tikkiBasedChaatList.style.display = "none";
    dahiBasedChaatList.style.display = "none";
    regionalSpecialitiesList.style.display = "none";
    friedSnackChaatList.style.display = "block";

    friedSnackChaat.style.backgroundColor = "rgb(70, 70, 70)";
    dahiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    tikkiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    classicChaat.style.backgroundColor = "rgb(42, 42, 42)";
    regionalSpecialities.style.backgroundColor = "rgb(42, 42, 42)";
}

function regionalSpecialitiesFunc(){
    classicChaatList.style.display = "none";
    tikkiBasedChaatList.style.display = "none";
    friedSnackChaatList.style.display = "none";
    dahiBasedChaatList.style.display = "none";
    regionalSpecialitiesList.style.display = "block";

    regionalSpecialities.style.backgroundColor = "rgb(70, 70, 70)";
    dahiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    tikkiBasedChaat.style.backgroundColor = "rgb(42, 42, 42)";
    friedSnackChaat.style.backgroundColor = "rgb(42, 42, 42)";
    classicChaat.style.backgroundColor = "rgb(42, 42, 42)";
}

window.addEventListener("load", classicChaatFunc());


//---------------------------------JavaScript for card hover event-------------------------------------------------------------

let card = document.querySelectorAll(".card");
let itemDescription = document.querySelectorAll(".item-description");

for (let i = 0; i < card.length; i++){
    card[i].addEventListener("mouseover", function(){
        itemDescription[i].style.opacity = 1;
        itemDescription[i].style.transition = "0.5s";
    });

    card[i].addEventListener("mouseout", function(){
        itemDescription[i].style.opacity = 0;
        itemDescription[i].style.transition = "0.5s";
    })
}

//---------------------------------Adding event listener to profile icon-------------------------------------------------------

let profileIcon = document.getElementById("profile-icon");
let profileDash = document.querySelector(".profile-dash");

profileIcon.addEventListener('click', toggleDash);

function toggleDash() {
    profileDash.classList.toggle("display-none");
}

window.addEventListener("load", toggleDash());

//---------------------------------Adding event listeners to the logout button and window--------------------------------------

let userInfo = JSON.parse(sessionStorage.getItem("user-object"));
let userCred = JSON.parse(sessionStorage.getItem("user-cred"));

let profileUserCredMob = document.querySelector("#profile-dash-usercred-mobile");
let profileUserCred = document.querySelector("#profile-dash-usercred");

let welcomeText = document.querySelector("h1");

profileUserCred.innerText = userCred;
profileUserCredMob.innerText = userCred;

welcomeText.innerText = "Welcome! Discover our mouth watering delights!";

let logoutBtn = () => {
    sessionStorage.removeItem("user-object");
    sessionStorage.removeItem("user-cred");
    window.location.href = 'login page.html';
    alert('User signed out!');
}

let checkInfo = () => {
    if (!sessionStorage.getItem("user-cred")) {
        window.location.href = 'login page.html';
    }
}
window.addEventListener("load", checkInfo);
logout.addEventListener("click", logoutBtn);

//---------------------------------Adding items to the cart-------------------------------------------------------------------------------- 

let menuItems = document.querySelectorAll(".menu-items");
let addToCartBtns = document.querySelectorAll(".buy-now");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        products[i];
        let itemNumbers = parseInt(localStorage.getItem("cart-items"));

        if (itemNumbers) {
            localStorage.setItem("cart-items", itemNumbers + 1);
            document.querySelector(".cart-span").textContent = itemNumbers + 1;
        }
        else {
            localStorage.setItem("cart-items", 1);
            document.querySelector(".cart-span").textContent = 1;
        }
        console.log(products[i]);

        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            if (cartItems[products[i].name] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products[i].name]: products[i]
                }
            }
            cartItems[products[i].name].inCart += 1;
        }
        else {
            products[i].inCart = 1;
            cartItems = {
                [products[i].name]: products[i]
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

        //Calculating total price of the cart items

        let cartCost = localStorage.getItem("total-cost");

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("total-cost", cartCost + products[i].price);
        }
        else {
            localStorage.setItem("total-cost", products[i].price);
        }
    });
};

//----------------------------------------------Displaying cart values on loading the page-----------------------------------------------------

function onLoadCartNumbers() {
    let itemNumbers = parseInt(localStorage.getItem("cart-items"));
    if (itemNumbers) {
        document.querySelector(".cart-span").textContent = itemNumbers;
    }
}
onLoadCartNumbers();