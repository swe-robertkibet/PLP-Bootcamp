// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWenCEJmVduvtdpXi7jjjJnpUW20x1O6Y",
  authDomain: "pc-builder-4cf45.firebaseapp.com",
  projectId: "pc-builder-4cf45",
  storageBucket: "pc-builder-4cf45.appspot.com",
  messagingSenderId: "30761389524",
  appId: "1:30761389524:web:9478113e9320a0dfee9a41",
  measurementId: "G-5N79DCTQHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Firebase Induction
function writeData() {
    firebase.database().ref("User").set({
        name: document.getElementById("nameField").value,
        email: document.getElementById("emailField").value,
        name: document.getElementById("textField").value 
    })
}



//Selecting the elements I need
var big_wrapper;
var hamburger_menu;

function declare() {
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

declare();

function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    })
}

events();
