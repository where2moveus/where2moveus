// Initializing firebase
var config = {
    apiKey: "AIzaSyCbuen40mzg1wt7QZcqfLrvWp9MqdJ4fS8",
    authDomain: "where2moveus-6351e.firebaseapp.com",
    databaseURL: "https://where2moveus-6351e.firebaseio.com/",
    projectId: "where2moveus-6351e",
    storageBucket: "where2moveus-6351e.appspot.com",
    messagingSenderId: "778203043172"
  };

  firebase.initializeApp(config);

//REGISTER THE USER
  $(`#btnSubmit`).click(function () {
    event.preventDefault();
  
    var email = $(`#signUpEmail`).val().trim();
    var password = $(`#signUpPW`).val().trim();
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (action) {
        console.log("Thank you for signing up")
  
  //Successful REGISTER redirects to index.html
        window.location.href = 'index.html';
  
    }).catch(function (error) {
       // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error);
  return error;
  // ...
});
  
  });

//This chunk of code stores the email and password to the database

// Variable to reference the database.
    var database = firebase.database();

// Initial Values
    var email = "";
    var password = "";
    var verifyPassword = "";

// Capture Button Click
    $("#btnSubmit").on("click", function(event) {
      event.preventDefault();

// Grabbed values from text-boxes
      email = $("#signUpEmail").val().trim();
      password = $("#signUpPW").val().trim();
      verifyPassword = $("#verifyPW").val().trim();

// Code for "Setting values in the database"
      database.ref().set({
        email: email,
        password: password,
        verifyPassword: verifyPassword
    });

});

//This line of code handles the Log-In
//On click of login button
$(`#btnLogin`).click(function () {
  event.preventDefault();

  var email = $(`#txtEmail`).val().trim();
  var password = $(`#txtPassWord`).val().trim();

//Check within firebase if its registered user(?)
  firebase.auth().signInWithEmailAndPassword(email, password).then(function (action) {
      console.log("You are Logged In Redirecting to the Homepage")

//Successful log in redirects to cities.html
      window.location.href = 'cities.html';

  }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      return error;

  });

})

// //On click of "Submit", email and pass are used to signup
// document.getElementById("btnSubmit").onClick('click', e=>{
//   const email = document.getElementById("signUpEmail").value;
//   const pass = document.getElementById("signUpPW").value;
//   firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
//    console.log(error.message);
//   });
// })  