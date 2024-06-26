//---------------------------------Adding event listener to profile icon-------------------------------------------------------


let profileIcon = document.getElementById("profile-icon");
let profileDash = document.querySelector(".profile-dash");

profileIcon.addEventListener('click', toggleDash);

function toggleDash() {
    profileDash.classList.toggle("display-none");
}

window.addEventListener("load", toggleDash());


//-----------------------------------------------------------------------------------------------------------------------------------------

let userInfo = JSON.parse(sessionStorage.getItem("user-object"));
let userCred = JSON.parse(sessionStorage.getItem("user-cred"));

let profileUserCredMob = document.querySelector("#profile-dash-usercred-mobile");
let profileUserCred = document.querySelector("#profile-dash-usercred");

profileUserCred.innerText = userCred;
profileUserCredMob.innerText = userCred;

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