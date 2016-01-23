
function compareNumbers(){
//get the value of input #a and #b
  var a = $("#a").val();
  var b = $("#b").val();

  var comparison = $("#comparison");

  a = parseFloat(a);
  b = parseFloat(b);


  if ( a > b ) {
    //if a is greater than b
    comparison.html('>');


  }else if ( a < b ) {
    //if a is less than b
    comparison.html('<');


  }else if ( a === b ) {
    //if a is equal to b
    comparison.html('===');

//if something else that is not right
  }else{
    comparison.html('NaN');
  }

}

$("#submit").click(compareNumbers);
