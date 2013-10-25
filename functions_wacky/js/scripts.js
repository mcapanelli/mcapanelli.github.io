/**
 * Created by Michael Capanelli on 10/24/13 for Wacky FUnctions assignment.
*/

// This function will calculatr how many krill et eaten by an adult blue whale during their feeding season per day.

// Our variable we'll store the number in is named "poorKrill
    // The function variables are "bodyWeight, which is the body weight of the anaimal, and "krillEats, which is the amount of krill the whale needs to eat per pound of bdoyweight
var poorKrill = function(bodyWeight, krillEats){var krillDead = bodyWeight * krillEats;
// krillDead is the calculation that will be returned to our "poorKrill' variable
    return krillDead;
}
// var "feedTime" is being used to call out our function
var feedTime = poorKrill(374692, .4 );
// This is what will be printed to the console. Remember the krill.
console.log(feedTime + " " + "poor little krill per day meet their untimely end during the Blue Whales feeding season. Poor little krill!");

