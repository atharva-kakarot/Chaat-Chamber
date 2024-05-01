//-------------------------------------------------Initializing Firebase-------------------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
const dbRef = ref(getDatabase(app));

//----------------------------------Adding an event listener to the login button-------------------------------------------------------

const login = document.getElementById("login");

login.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in!");

            //Getting the credentials from the realtime database
            get(child(dbRef, `users/${password}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        sessionStorage("user-object", JSON.stringify({
                            email: snapshot.val().email,
                        }))
                    }
                    else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });


            window.location.href = "index.html";
            sessionStorage.setItem("user-cred", JSON.stringify(email));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})

// After user has logged out if the credentials exist remove it
if (sessionStorage.getItem("user-cred")) {
    sessionStorage.removeItem("user-cred");
}

//--------------------------------------------Adding an event listener to the Enter key on the keyboard-----------------------------------

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        login.click();
    }
});