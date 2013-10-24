// Functions worksheet Created by Michael Capanelli on 10/23/13.


//------------ Circumference of a circle ------------------
/*
var total = calcRadius();// the variable "total" is what will be printed to the console
function calcRadius(){ // The function name where the calculation will be stored
    var radius = 12; // The Radius of our circle
    var Circum = radius * 2 * 3.141592; // Circumference is r2 * π
    return Circum; // Return will store the answer in our "total" variable
}
console.log("The circumference of the circle is" + " " + total);
// This is what will print in the console log.


It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
    Given:
Victim’s weight (in pounds)
Parameter(s) for function:
Victim’s weight (in pounds)
Return:
    Number of Bee stings
Result to print to the console:
    “It takes X bee stings to kill this animal.
 */
//---------------Stung by Bees! -----------------------------

var ouch = function(weight, stingRate){var stingDead = weight * stingRate;// this anonymous function defines what we'll need to make the calculation. The numbers will be stored in another variable
    return stingDead; // this is what we'll be returning to our "ouch" variable
}

var sorry = ouch(140, 8.666666667 );// the var defines the "ouch" variable and serves to call our function
console.log("It takes" + " " + sorry + " " + "to kill this animal");// This is what will print in the console log.
