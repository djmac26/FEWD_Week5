$(document).ready(function() {

  $("#submit-btn").click(function () {
    event.preventDefault();

    var city = $.trim($("#city-type").val());
    var $backgroundElm = $("body");

    if ( city === "New York" || city === "New York City" || city === "NYC" ) {
      $backgroundElm .css({"background": "url(images/nyc.jpg) no-repeat center center fixed", "background-size": "cover"});
    } else if ( city === "San Francisco" || city === "Bay Area"  || city === "SF" ) {
      $backgroundElm .css({"background": "url(images/sf.jpg) no-repeat center center fixed", "background-size": "cover"});
    } else if ( city === "Los Angeles" || city === "LA"  || city === "LAX" ) {
      $backgroundElm .css({"background": "url(images/la.jpg) no-repeat center center fixed", "background-size": "cover"});
    } else if ( city === "Austin" || city === "ATX" ) {
      $backgroundElm .css({"background": "url(images/austin.jpg) no-repeat center center fixed", "background-size": "cover"});
    } else if ( city === "Sydney" || city === "SYD" ) {
      $backgroundElm .css({"background": "url(images/sydney.jpg) no-repeat center center fixed", "background-size": "cover"});
    } else {
      $backgroundElm .css({"background": "url(images/citipix_skyline.jpg) no-repeat center center fixed", "background-size": "cover"});
    }

     $("#city-type").val("");
    });
});
