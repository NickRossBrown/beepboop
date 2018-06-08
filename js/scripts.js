
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
  // console.log("reached function look for number one   "+ number + number.length)
  var something = false;
  for(x=0;x<number.length;x+=1){
    // console.log(x + "  number[x]  " + number[x])
    if (number[x] == 1){
      console.log("found a 1");
      something = true;
      break;
    };
  };
  // console.log("the ending of function   ...." + something)
  return something;
}
function lookForAZero(number) {
  var number = $("#input").val();
  // console.log("reached function look for number one   "+ number + number.length)
  var something = false;
  for(x=0;x<number.length;x+=1){
    // console.log(x + "  number[x]  " + number[x])
    if (number[x] == 0){
      console.log("found a 0");
      something = true;
      break;
    };
  };
  // console.log("the ending of function   ...." + something)
  return something;
}
function dividedByThree(number) {
  var numberLength = $("#input").val();
  var something = false;
  if (number % 3 === 0){
      console.log("can be divided by three");
      something = true;
      return something
  }
}


function runAllFunctions(input){
  var inputText = parseInt($("#input").val());
  console.log("not a number q" + isNaN(inputText))
  var inputNumber =  isItANumber(inputText);
  var isThereAOne = lookForNumberOne(inputText);
  var isThereAZero = lookForAZero(inputText)
  var canBeDividedByThree = dividedByThree(inputText)
  console.log("LOOOK HERE" + canBeDividedByThree )
  if (canBeDividedByThree == true) {
    console.log("reached true on CAN BE DIVIDED BY THREE");
  }
  if (isThereAOne == true) {
    console.log("reached true on Is There A ONE FUNCTION");
  }
  if (isThereAZero == true) {
    console.log("reached true on Is There A ZERO FUNCTION");
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
