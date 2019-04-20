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
    $("#").on("click", function(event) {
      event.preventDefault();

// Grabbed values from text-boxes
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

// Code for "Setting values in the database"
      database.ref().set({
        name: name,
        email: email,
        age: age,
        comment: comment
    });

});

