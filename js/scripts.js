
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
  var something = false;
  for(x=0;x<number.length;x+=1){
    if (number[x] == 1){
      console.log("found a 1");
      something = true;
      break;
    };
  };
  return something;
}
function lookForAZero(number) {
  var number = $("#input").val();
  var something = false;
  for(x=0;x<number.length;x+=1){
    if (number[x] == 0){
      console.log("found a 0");
      something = true;
      break;
    };
  };
  return something;
}
function dividedByThree(number) {
  var numberLength = $("#input").val();
  var something = false;

  if (number % 3 === 0 && number > 0){
      console.log("can be divided by three");
      something = true;
      return something
  }
}
var range = function getRange(number) {
  var findRange = []
  for (i=0;i<=number;i++){
    findRange.push(i);
  }
  console.log(findRange)
}
function runAllFunctionsBasicBot(input){
  var inputText = parseInt($("#input").val());
  var inputNumber =  isItANumber(inputText);
  var isThereAOne = lookForNumberOne(inputText);
  var isThereAZero = lookForAZero(inputText)
  var canBeDividedByThree = dividedByThree(inputText)
  range(inputText)
  console.log(range)
  if (canBeDividedByThree == true) {
    console.log("reached true on CAN BE DIVIDED BY THREE");
    $(".outputDiv").text( "I'm sorry, Dave. I'm afraid I can't do that.");
    return;
  }
  if (isThereAOne == true) {
    console.log("reached true on Is There A ONE FUNCTION");
    $(".outputDiv").text( "BOOP!");
    return;
  }
  if (isThereAZero == true) {
    console.log("reached true on Is There A ZERO FUNCTION");
    $(".outputDiv").text( "BEEP!");
    return;
  }
  else{
    $(".outputDiv").text(inputText);
  }
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    var inputText = parseInt($("#input").val());
    // lookForNumberOne(inputText)

    runAllFunctionsBasicBot();
  });
  $("#submitButtonEvenRange").click(function(event) {
    event.preventDefault();
    var inputText = parseInt($("#inputEvenRange").val());
    $(".outputDivEvenRange").text(inputText)
  });
});
