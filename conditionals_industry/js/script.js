// Conditionals Industry assignment Michael Capanelli 10/19/2013

// With this assignment we'll calculate which competitions our tournament team will be able to attend based on dues paid and charitable contributions.

// The givens are amount collected in club dues, donations, and travel expenses for each of the four competitions we attend

// Donations given to the society
var donaTions =prompt("Please enter any donations to date");
// Dues collected as part of the fencing program
var clubDues =prompt("Please enter the total dues collected to date");
// Total amout collected
var amountOnhand = donaTions + clubDues;
// Cost of U.S. competitons
var compCostsUs = 300;
// Cost of European competitions
var compCostEu = 1500;
// Total cost for all competitions
var totalCost = compCostsUs + compCostEu;
 // if we take in a total of 1800 we can attend all the competitions this year.
if(amountOnhand >= totalCost){
    console.log("We can attend all American and european tournaments this year. Gear up boys!")
// If we hit 1500 we can compete i Europe but not the U.S.
}else if(totalCost  >= compCostEu){
    console.log("We're going to europe but not the US competitions")
// If we're under 1500 we can only compete in the U.S. and not Europe
}else if(totalCost >= compCostsUs){
    console.log("only local competitions this year boys")
}