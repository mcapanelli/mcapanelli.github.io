// Wacky conditionals assignment Michael Capanelli 10/22/2013

// Problem: Michael really likes Shawarma  but can't always get it when he'd like do to limited funds. He has a cell phone bill (200) a credit card bill (75) and other expenses like gas (40 - 60) and other unexpected things that pop up form time to time. A Shawarma done right costs 15, so will Michael have enough at the end of the week to get his combo Shawarma fix? Let's find out.

// The cost of a delicious combo Shawarma
Var shawArma = 15;
// My family cell phone bill. It's 200 a month so let's say 50 a week
var cellBill = 50;
// The miles I drive each week
var milesDriven =  40;
// total fuel cost for the week (Dependant on milesDriven)
var fuelCost = milesDriven / 12 * 3.55;
// the amount of money left over after paying for essentials
ExpendAble = 100;
// If the amount left over is equal to or greater than the cost of the Shawarma, I'm in. If not, I'm a sad boy
var totalOnhand = ExpendAble - (fuelCost + cellBill)
if( totalOnhand >= shawArma){
    console.log("It's shawarma time baby")
}even if(totalOnhand < shawArma){
    console.log("No Shawarma for you!")
}

