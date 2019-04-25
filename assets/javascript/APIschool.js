var locations = [];
var cardDiv = `<div class="card"> \
  <div class="card-image waves-effect waves-block waves-light"> </div> \
  <div class="card-content"> \
    <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span> \
    <p><a href="#">This is a link</a></p></div> \
  <div class="card-reveal">\
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>\
    <p>Here is some more information about this product that is onlyrevealed once clicked on.</p>\
    </div>\
    </div>\
    </div>`;

//function renderCard() {
 // $("#cards-view").html(locations.map(makeCard));

function makeCard() {
  $("#card").append(cardDiv);
}

$("#add-place").on("click", function(event) {
  event.preventDefault();
  var location = $("#location-input").val();
  location.push(locations);

  makeCard();
});

makeCard();

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
