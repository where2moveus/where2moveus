var locations = [];

function makeCard() {
  $("#card").append(`<div class="card">`);
}

function renderCard() {
  $("#cards-view").html(locations.map(makeCard));

}

$("#add-place").on("click", function(event) {
  event.preventDefault();
  var location = $("#place-input").val();
  location.push(locations);

  renderCard();
});

renderCard();

function split() {
  var split = locations.split(",");
  console.log(split[1]);
  var city = split[0];
  console.log(city);
  var state = split[1];
  console.log(state);
}

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
