var locations = [ ];
var fields

function makeButton(str) {
  return `<button class="place">${str}</button>`;
}

// Function for displaying movie data
function renderButtons() {
  $("#buttons-view").html(states.map(makeButton));
  // Delete the content inside the buttons-view div prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)

  // Loop through the array of movies, then generate buttons for each movie in the array
}

// This function handles events where the add movie button is clicked
$("#add-place").on("click", function(event) {
  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // "Enter" instead of clicking the button if desired
  event.preventDefault();
  var state = $("#place-input").val();
  states.push(state);

  // Write code to grab the text the user types into the input field
  // Write code to add the new movie into the movies array

  // The renderButtons function is called, rendering the list of movie buttons
  renderButtons();
});

// Calling the renderButtons function to display the initial list of movies
renderButtons();

$(document).on("click", ".place", function() {
  var state = $(this).text();
  var queryURL =
    "https://api.schooldigger.com/v1.1/rankings/schools/" +
    state +
    "?perPage=50&appID=6a70afe7&appKey=c658b567ce1b58146d7141126ce006fa";
  //c658b567ce1b58146d7141126ce006fa //6a70afe7
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(state) {
    console.log(movie);

    $("#place-view").html(`
          <h1>${state.schoolName}</h1>
          <h3>Plot: ${state.schoolLevel}</h3>
          <h4>Rank: ${state.rankHistory}</h4>
          `);
  });
});
