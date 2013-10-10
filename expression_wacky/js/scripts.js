// Michael Capanelli 10/09/2013 Javascript for Wacky Expressions assignment //

// This calculator will gather information through a prompt and attempt to estimate your height based on your shoe size (Ladies, don't lie) //

var shoeSize = prompt('I\'m going to try and guess your height. Please enter your shoe size as a while number with any half numbers expressed as a decimal, I.E. 7 1/2 becomes 7.5');
var estHeight = shoeSize * 2 + 50;
var bestGuess;
bestGuess = "Based on your shoe size, your estimated height is" + " " + estHeight;
alert(bestGuess)
console.log(bestGuess)