/**
 * Created by Michael Capanelli on 10/24/13 for Personal Functions assignment.
 */

// With this function we'll calculate how many pounds of Pasta we'll need for dinner based on number of guests

var dinner = function(dingest, pasta){var servings = dingest * pasta;// this anonymous function defines what we'll need to make the calculation. The numbers will be stored in another variable
    return servings; // this is what we'll be returning to our "ouch" variable
}

var hungry = dinner (8,.5 );// the var defines the "dinner" variable and serves to call our function
console.log("You'll need" + " " + hungry + " " + "pounds of pasta to feed your guests");// This is what will print in the console log.