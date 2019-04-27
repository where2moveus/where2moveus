var locations = [];

// locations.push(location);

function makeCard() {
  //return is the card div

  return (
    `<div class="card">` +
    locations.pop() +
    //returns a card with the last array for locations does not additional cards
    `<div class="card-image waves-effect waves-block waves-light">
    </div>\
  <div class="card-content">\
        <span\
          class="card-title activator grey-text text-darken-4"\
          ><i class="material-icons right">more_vert</i></span\
        >\
        <p><a text="#">This is a link</a></p>\
      </div>\
  <div class="card-reveal">\
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>\
    <p>Here is some more information about this product that is only revealed once clicked on.</p>\
    </div>\
    </div>\
    </div>`
  );
}
//card will render when user submits the city and state
function renderCard() {
  $("#cards-view").html(locations.map(makeCard));
}

$("#add-place").on("click", function(event) {
  event.preventDefault();
  var location = $("#location-input").val();
  locations.push(location);
  //ln 27 is the first attempt to

  console.log(location);
  renderCard();
});

renderCard();

//Below code was the start for the schooldigger API

// $(document).on("click", ".place", function() {
//   var state = $(this).text();
//   var queryURL =
//     "https://api.schooldigger.com/v1.1/rankings/schools/" +
//     state +
//     "?perPage=50&appID=6a70afe7&appKey=c658b567ce1b58146d7141126ce006fa";
//   //c658b567ce1b58146d7141126ce006fa //6a70afe7
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(state) {
//     console.log(movie);

//     $("#place-view").html(`
//           <h1>${state.schoolName}</h1>
//           <h3>Plot: ${state.schoolLevel}</h3>
//           <h4>Rank: ${state.rankHistory}</h4>
//           `);
//   });
// });
