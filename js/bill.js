//--------------------------------------------Adding event listener to mode button---------------------------------------------------------

let mode = document.getElementById("mode")

mode.addEventListener("click", function(){
    document.body.classList.toggle("black");
    document.body.style.transition = "0.5s"; 

    document.querySelector("h1").classList.toggle("white")
    document.querySelector("h1").style.transition = "0.5s";

    document.querySelector(".order-summary").classList.toggle("grey");
    document.querySelector(".order-summary").classList.toggle("white");
    document.querySelector(".order-summary").style.transition = "0.5s";

    document.querySelector("table").classList.toggle("white");
    document.querySelector("table").style.transition = "0.5s";

    document.querySelector("table").style.transition = "0.5s";

    document.querySelector("#confirmBtn").classList.toggle("grey-confirm-button");
    document.querySelector("#confirmBtn").classList.toggle("white");
    document.querySelector("#confirmBtn").style.transition = "0.5s"

})

//-----------------------------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------Displaying items in the cart------------------------------------------------------------------

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let itemContainer = document.querySelector(".order-list");

    console.log(cartItems);
    if (cartItems && itemContainer) {
        itemContainer.innerHTML = '';
        Object.values(cartItems).map(function (item) {
            itemContainer.innerHTML += `
                    <h3 class="item-name">${item.name}</h3>
                    <h3 class="item-price">${item.price}</h3>
                    <h3 class="item-cart">${item.inCart}</h3>`;
        })
    }
    else {
        itemContainer.innerHTML = "Your cart is empty."
        itemContainer.style.fontFamily = "Saira Condensed";
        itemContainer.style.fontSize = "20px";
    }
    let total = localStorage.getItem("total-cost");
    document.querySelector(".total").innerHTML = 'Total:' + ' ' + total + ' Rs';
}
displayCart();

//----------------------------------------Displaying delivery details in the bill-------------------------------------------------

let fullName = JSON.parse(localStorage.getItem("fullName"));
let mobileNum = JSON.parse(localStorage.getItem("mobileNum"));
let address = JSON.parse(localStorage.getItem("address"));
let city = JSON.parse(localStorage.getItem("city"));
let pinCode = JSON.parse(localStorage.getItem("pinCode"));

console.log(fullName);
document.querySelector(".delivery-details").innerHTML = `
    <table>
        <tr>
            <td>Full Name:</td>
            <td>${fullName}</td>
        </tr>
        <tr>
            <td>Mobile number:</td>
            <td>${mobileNum}</td>
        </tr>
        <tr>
            <td>Address:</td>
            <td><div id="address-area">${address}</div></td>
        </tr>
        <tr>
            <td>City:</td>
            <td>${city}</td>
        </tr>
        <tr>
            <td>Pin Code:</td>
            <td>${pinCode}</td>
        </tr>
    </table>`;