$(document).ready(function() {
  
  var citiesArr = [];


  //function displayPhotos() {
  var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=cities&key=AIzaSyAvvwmXICbkoU9Y3Bq5BLyeMGaaqnNnYAI"
  
      $.ajax({
      url: queryURL,
      method: "GET",
        //dataType: "jsonp",
            //cache: false,
            //success: function(response){                          
                //alert(response); 
            //}
            }).then(function(response) {
      $("#cityCards").text(JSON.stringify(response));
      console.log(queryURL);
      console.log(response);
    })
      //var photos = response.largeImageURL;

  //putting place in card div
     $("#csSubmit").on("click", function(event) {
       event.preventDefault();
      var city = $("#searchFor").val().trim();


      
        //var photos = response.largeImageURL;
        //city.append(photos);
        //$("#csSubmit").append(photos)

        // Adding city from the textbox to our array
        //citiesArr.push(city);
      //})
        //$(document).on("click", displayPhotos);



        //https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJdd4hrwug2EcRmSrV3Vo6llI&key=API_KEY

    })

})

