// Conditionals assignment 10/17/2013 Michael Capanelli //

/*
// Stuff your face
// To enter the heaveyweight division in the pie eating contest, a competitor must weight 250lb
var compWeight = 240;

//If the weight is equal to or more than 250lb they can compete, or else they need to gain m,ore weight. //

if (compWeight >= 250){
    console.log("You can compete");
}else{
    console.log("Go and gain some weight!");
}

*/

/*

// Last chance for gas
// Your about to pass the last gas station in the desert for 200 miles. Do you have enough ga to make it!!!
// The givens are; mpg, Tank capacity, distance, and percentage of gas in tank

// The mileage of the car in question
var mpg = 12;
// The amount of gas currently in the tank (For calculation)
var gasGauge = .60;
// The capacity of the tank
var tankHold = 25;
// amount of gas current in tank (for display)
var gasHold = tankHold * gasGauge;
// the distance the car will go on the given amount of gas
var mileage = mpg * tankHold * gasGauge;
// If the amount of gas in our tank is enough to make the 200 miles. If not we get the second message
var drive;
drive = (mileage <= 200) ? "You only have" + " " + gasHold + " " + "gallons of gas in your tank, better get gas now while you can" : "Yes you can make it without stopping";
console.log(drive);

*/


/*

var username = prompt("please enter your username");
var passWord = prompt("please enter your password");
if(username == "mcapanelli" && passWord == "solingen")
{
    console.log("Welcome mcapanelli")
}
else
{
    console.log("Error Password or Username");
}


//Enter username
var userName = prompt("Please enter username");
//Enter Password
var passWord = prompt("Please enter your password");
//If username and password match
if(userName == "mcapanelli" && passWord == "solingen"){
     console.log("Welcome mcapanelli");
// if no match is found
}else{
    console.log("user not found")
}

*/

/*
// Username and Password validation
//Prompt to enter usernamae
var userName =prompt("Please enter your username");
//prompt to enter password
var passWord =prompt("Please enter your password");
// if username and password are correct, this message displays
if(userName == "mcapanelli" && passWord == "solingen"){
    console.log("Welcome mcapanelli")
// If username is incorrect this message displays
}else if(userName != "mcapanelli"){
    console.log("User not found");
// If password is incorrect, this message is displayed
}else if(passWord != "solingen"){
    console.log("Password does not match our records");
}

// The frustrating thing for me is getting the errors to display in order. I can't seem to figure out how to sting it together so the correct error message is displayed whe the error is made and not after filling in all fields. If you could guide me on this I'd appreciate it.


*/

//Movie Ticket Prices

//This calculator will give you movie ticket prices based on conditionals

//This prompt collects the age
var age =prompt("Please enter your age");
//This prompt will collect the showing time
var movieTime =prompt("Please enter showing time");
// This is the standard ticket price
var ticketPrice = "$12.00";
// If your over 55 your ticket price will be $7.00
if(age >= 55){
    console.log("The ticket price is $7.00");
//If you go at 3pm your ticket prince will be $7.00
}else if(movieTime == 3){
    console.log("The ticket price is $7.00");
    //If you go at 5pm your ticket prince will be $7.00
}else if(movieTime == 5){
    console.log("The ticket price is $7.00");
}
//If you don't meet any of the above criteria you'll have to pay the normal price
else {
    console.log("The ticket price is" + " " + ticketPrice);
}




