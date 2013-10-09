// Javascript exercises //

/*
var quiz1 = 8;
var quiz2 = 6;
var quiz3 = 9;
var quiz4 = 10;
var quiz5 = 27;



var average = (quiz1 + quiz2 + quiz3 + quiz4 + quiz5) /2;



var length = 60;
var width = 72;
var perimeter = 60 * 2 + 72 * 2;

 

// Expressions age example practice //

var yearBorn = 1971;
var age = 2013 - yearBorn - 1;

// If birthday gas occurred then do not use -1 //

console.log(age);



// Expressions - Arithmetic Operators //

// area of triangle is half width X hight //

var width = 7;
var height = 8;
var area = width * height/2;



// Expressions Concatenating Strings Practice //

var firstName = "Michael";
var lastName = "Capanelli";
var fullName = firstName + " " + lastName;


var a = 7;
var b = 8;
var result= a + b;



// Expressions Casting Practice //

var stringVar = "6"
var result = 7 + Number(stringVar);
 
var areaCode = 917
var firstPart = 224
var secPart = 1597
var phoneNo = "(" + String(areaCode) + ")" + " " + String(firstPart) + "-" + String(secPart);

// Expressions Modulo //

var remainder = 32 % 10;
consloe.log(remainder)

// Expressions Worksheet begins here //

// Dog Years Example//

// Sparky the Pitbull is 1 in human years, how old is he in dog years //
var dogAge = 7;
var peopleAge = 1;
var humanAge = dogAge * peopleAge;
console.log(humanAge);

 

// Slice of Pie Example //

// If 20 people are at a party and 5 pizzas are ordered with 10 slices each, how many slices will each partygoer get//

var zaOrder = 5;
var slicePie = 10;
var pepParty = 20;
var noSlice = zaOrder * slicePie / pepParty;
console.log(noSlice)

//Answer is pies*slices/No or people //

 

// How many slices would the dog get is everyone got a whole number //

var zaOrder = 5;
var slicePie = 10;
var pepParty = 20;
var noSlice = zaOrder * slicePie / pepParty;
var leftOver = noSlice%2;
var sparkSlice = pepParty * leftOver;
console.log(sparkSlice) 


// So to calculate the number of slices we use modulo operator to gather only the remainder and  *  pepParty to get the var sparkSlice //



// Find the average amount pent in a 5 week period//
var week1 = 125
var week2 = 160
var week3 = 174
var week4 = 201
var week5 = 222
var total = week1 + week2 + week3 + week4 + week5;
// display the total spent first //
var average = (week1 + week2 + week3 + week4 + week5 ) / 5;
// Then display the average and total together with a little text //
var amountSpent = "Total amount spent";
var averageSpent = "Average spent per week";
console.log(total, amountSpent) 
console.log(average, averageSpent) 

*/

// Discount percentage: display the original price, discount price, and total with tax //

var orgPrice = 75; 
var disRate = .25;
var taxRate = 0.0875;
var disPrice = orgPrice - (orgPrice * disRate);
var taxTotal = disPrice + (disPrice * taxRate);
var disCrip1 = "Your Leather Jacket was originally";
var disCrip2 = "but after a 25% discount it is now";
var disCrip3 = "without tax";
var disCrip4 = "and";
var disCrip5 = "with tax";
console.log(disCrip1, orgPrice, disCrip2, disPrice, disCrip3, disCrip4,taxTotal, disCrip5)

// This one hurt my brain a little. //

// To view precedding examples, remove comment marks and move console.log //
