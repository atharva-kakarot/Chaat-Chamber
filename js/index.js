//---------------------------------Making an array of object items------------------------------------------------------------------------

let products = [
    {
        name: 'Dungeon Samosa',
        price: 20,
        inCart: 0
    }, {
        name: 'Sev Puri Sensation',
        price: 40,
        inCart: 0
    }, {
        name: 'Pani Puri Pizzazz',
        price: 200,
        inCart: 0
    }, {
        name: 'Dosa Delight',
        price: 50,
        inCart: 0
    }, {
        name: 'Creamy Curd Vada',
        price: 30,
        inCart: 0
    }, {
        name: 'Khasta Kachori Kingdom',
        price: 40,
        inCart: 0
    }
]


//---------------------------------Adding event listeners to the logout button and window--------------------------------------

let userInfo = JSON.parse(sessionStorage.getItem("user-object"));
let userCred = JSON.parse(sessionStorage.getItem("user-cred"));

let welcomeText = document.querySelector("h1");
if (!userCred) {
    welcomeText.innerText = "Welcome! Check out our delicacies!";
}
else {
    welcomeText.innerText = "Welcome " + userCred + "! Check out our delicacies!";
}

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