//-------------------------------------------------Initializing Firebase-------------------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBa3GnWubeEmQe19iWUTtJzruRlKEq5Apo",
    authDomain: "baba-ka-dhaba-b36e1.firebaseapp.com",
    projectId: "baba-ka-dhaba-b36e1",
    storageBucket: "baba-ka-dhaba-b36e1.appspot.com",
    messagingSenderId: "724921145696",
    appId: "1:724921145696:web:3dd4c236625c74f575e605"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

//----------------------------------Adding an event listener to the submit button-------------------------------------------------------

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Account created");
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    set(ref(db, 'users/' + firstName), {
        firstName: firstName,
        lastName: lastName,
        email: email,
    })
        .then(() => {
            console.log("saved successfully!");
        })
        .catch((error) => {
            console.log("Write up failed");
        });
})

//--------------------------------------------Adding an event listener to the Enter key on the keyboard-----------------------------------

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit.click();
    }
});