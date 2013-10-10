//Michael Capanelli 10/09/2013 Javascript for Industry Expressions assignment //

// This may seem like the wacky calculations, but its actually what I currently do. I teach Historic Fencing out of a school and this set o claculations will give us the average amount used and cost of training blunt tips for our longswords //

var month1 = 2;
var month2 = 6;
var month3 = 5;
var month4 = 8;
var month5 = 2;
var month6 = 1;
var averageUse = (month1 + month2 + month3 + month4 + month5 + month6) /2
var cost = 4.99 / 4;
var avrCost = cost * averageUse;
var yearlyCost = avrCost * 2;
var totalUse = "We use an average of" + " " + averageUse + " " + "rubber blunt tips every 6 months at a cost of" + " " + avrCost + " " + "per month" + " " + "and a yearly cost of" + " " + yearlyCost;
alert(totalUse)
console.log(totalUse)