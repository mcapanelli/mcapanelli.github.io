// Michael Capanelli 10/09/2013 Javascript for Personal Expressions assignment //

// This set of calculations will give us the total cost of driving my for Explorer for one year //

var milesDriven = prompt("We're going to attempt to estimate the cost of driving a 2005 Ford Explorer per year. Please enter the estimated miles driven per month");
var fuelCost = milesDriven * 3.55 * 12 / 12;
// Oil change is every 3 months or 3500 miles. I'm not sure how to activate a new variable if you exceed 3500 miles in less than three months of I've chosen to calculate it based on my own frequency //
var oilChange = 4 * 33.75;
var totalCost = fuelCost + oilChange;
var disTotal = "The total fuel cost per year for your car is" + " " + fuelCost + " " + "and the total maintainence cost is" + " " + oilChange + " " + "for a grand total of" + " " + totalCost + " " + "per year";
alert(disTotal)
console.log(disTotal)

