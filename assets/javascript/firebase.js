// Initializing firebase
var config = {
    apiKey: "AIzaSyCbuen40mzg1wt7QZcqfLrvWp9MqdJ4fS8",
    authDomain: "where2moveus-6351e.firebaseapp.com",
    databaseURL: "https://where2moveus-6351e.firebaseio.com",
    projectId: "where2moveus-6351e",
    storageBucket: "where2moveus-6351e.appspot.com",
    messagingSenderId: "778203043172"
  };
  firebase.initializeApp(config);

//Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
