
var resultText = function(result){
  $(".outputDiv").text(result);
}
function isItANumber(text){
  var number = (text)
  if (isNaN(number)===true){
    resultText("Please enter a number")
  }
  if(isNaN(number)===false){
    return(number)
    console.log(number)
  }
}


$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var inputText = $("#input").val()

    isItANumber(inputText)

  });
});
