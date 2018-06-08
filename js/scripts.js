
var resultText = function(result){
  $("output").text(result);
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var inputText = $("#input").val()
    console.log(inputText)
    resultText(inputText)
  });
});

// $(document).ready(function() {
//   $("#submit").click(function(event){
//     event.preventDefault();
//     var inputText = parseInt($("#input").val());
//     // someThing(inputText);
//     // console.log("The result of the input is " + someThing(inputText))
//     conversionResult(someThing(inputText).join(""));
//   });
//
// });
