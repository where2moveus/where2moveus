var convert = require("xml-js");
var xml = require("fs").readFileSync("test.xml", "utf8");
var options = { ignoreComment: true, alwaysChildren: true };
var result = convert.xml2js(xml, options);
console.log(result);

$(document).ready(function() {
  var zillow = $.ajax({
    url: zillow,
    method: "GET",
    dataType: "XML",
    cache: false,
    success: function(response) {
      alert(response);
    }
  }).then(function(response) {
    console.log(response);
  });
});