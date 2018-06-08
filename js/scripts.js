
var resultText = function(result){
  $(".outputDiv").text(result);
};
function isItANumber(text){
  var number = parseInt($("#input").val())
  console.log(number);
  if (isNaN(number)===true){
    resultText("Please enter a number");
  }
  if(isNaN(number)===false){
    console.log(number);
    // return(number)
  };
  return(number)
};
function lookForNumberOne(number) {
  var number = $("#input").val();
  console.log("reached function look for number one   "+ number + number.length)
  var something = false;
  for(x=0;x<number.length;x+=1){
    console.log(x + "  number[x]  " + number[x])
    if (number[x] == 1){
      console.log("found a 1");
      something = true;
    };
  };
  console.log("the ending of function   ...." + something)
  return something;
}


function runAllFunctions(input){
  var inputText = parseInt($("#input").val());
  console.log("not a number q" + isNaN(inputText))
  var inputNumber =  isItANumber(inputText);
  var isThereAOne = lookForNumberOne(inputText);
  console.log("LOOOK HERE" + isThereAOne)
  if (isThereAOne == true) {
    console.log("reached true on run all functions");
  }
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var inputText = parseInt($("#input").val());
    // lookForNumberOne(inputText)

    runAllFunctions();

  });
});
