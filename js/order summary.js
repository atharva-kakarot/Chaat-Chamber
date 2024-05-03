//---------------------------------------Adding event listeners to the logout button--------------------------------------------------------------

let userInfo = JSON.parse(sessionStorage.getItem("user-object"));
let userCred = JSON.parse(sessionStorage.getItem("user-cred"));

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

//-----------------------------------Decrementing the cart number when removing an item from the list-----------------------------------------

function cartNum() {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    let totalQuantity = 0;

    if (cartItems) {
        for (const item of Object.values(cartItems)) {
            totalQuantity += item.inCart;
        }
    }
    localStorage.setItem("cart-items", JSON.stringify(totalQuantity));
}


//-----------------------------------Function to calculate and set total cost-----------------------------------------------------------------------

function calculateTotalCost() {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    let totalCost = 0;

    if (cartItems) {
        // Loop through cart items and sum their prices
        for (const item of Object.values(cartItems)) {
            totalCost += item.price * item.inCart; // Consider quantity (inCart)
        }
    }

    localStorage.setItem("total-cost", totalCost);
}

//-----------------------------------------Displaying items in the cart------------------------------------------------------------------

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let itemContainer = document.querySelector(".order-list");

    console.log(cartItems);
    if (cartItems && itemContainer) {
        itemContainer.innerHTML = '';
        Object.values(cartItems).map(function (item) {
            itemContainer.innerHTML += `
            <span class="item" id="item-name">${item.name}</span>
            <span class="item" id="item-price">${item.price}</span>
            <span class="item" id="item-cart">${item.inCart}</span>
            <span class="close-btn" data-item-name="${item.name}">x</span>`;
        })

        //Adding event listener to the close button
        let closeButton = document.querySelectorAll(".close-btn");
        closeButton.forEach(closeBtn => {
            closeBtn.addEventListener("click", function (event) {
                let itemName = event.target.dataset.itemName;
                delete cartItems[itemName];
                localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                cartNum();
                displayCart();
            });
        });
        if (closeButton.length == 0) {
            itemContainer.innerHTML = "Your cart is empty."
            itemContainer.style.fontFamily = "Saira Condensed";
            itemContainer.style.fontSize = "20px";
        }
    }
    else {
        itemContainer.innerHTML = "Your cart is empty.";
        itemContainer.style.fontFamily = "Saira Condensed";
        itemContainer.style.fontSize = "20px";
    }

    calculateTotalCost();

    let total = localStorage.getItem("total-cost");
    document.querySelector(".total").innerHTML = 'Total:' + ' ' + total + ' Rs';
}
displayCart();

//---------------------------------------Adding event listener to the confirm button-----------------------------------------------------------------

let confirmBtn = document.getElementById("confirm-button");

confirmBtn.addEventListener("click", function () {
    let fullName = document.getElementById("full-name").value;
    let mobileNum = document.getElementById("mobile-number").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let pinCode = document.getElementById("pin-code").value;
    let itemContainer = document.querySelector(".order-list");

    if (fullName === '' || mobileNum === '' || address === '' || city === '' || pinCode === '') {
        alert("Fill up the required details!");
        preventDefault();
    }
    else if (itemContainer.innerHTML === "Your cart is empty.") {
        alert("Your cart is empty!");
        preventDefault();
    }

    localStorage.setItem("fullName", JSON.stringify(fullName));
    localStorage.setItem("mobileNum", JSON.stringify(mobileNum));
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("pinCode", JSON.stringify(pinCode));

    window.location.href = "bill.html";
})

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        confirmBtn.click();
    }
});