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

