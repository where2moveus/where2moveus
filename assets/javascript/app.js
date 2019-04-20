$(document).ready(function() {
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyAvvwmXICbkoU9Y3Bq5BLyeMGaaqnNnYAI";

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: 'jsonp',
            cache: false,
            success: function(response){                          
                alert(response); 
            } 
    }).then(function(response) {
      console.log(response);
    });


})