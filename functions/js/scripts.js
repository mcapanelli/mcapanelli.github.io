// Created by hongkongfuey on 10/23/13.
/*
function outptMsg(){
   //function runs code placed here!
    console.log("Hello World");
}
var width = 5;
// Function will read var inside code block. concole will read the area not scoped or limited to the function code. It will prefer the code scoped to the larger document and NOT the code scoped to the function
function calcArea(){
   var width = 20;
    var height = 30;
     var area = width * height;
    console.log(area);


}
// For functions to work they must be called or invoked
outptMsg();
calcArea();
// The invocation or function call can be used to repeat a function when needed at any point in the code


calcArea(30, 20); //w=30, h=20
 function calcArea(w, h){
     var area = w * h;
    console.log(area);



function dogYears(age){ // () holds parameters
     var dogYears = age * 7;
    console.log("Sparky is" + " " + dogYears + " " + "years old")
}
var age1 = 2;
var age2 = 3;
dogYears(age1); // () holds arguments
dogYears(age2); // you can also pass in a variable. () can also hold called out variables as arguments
dogYears(4);
dogYears(5);



// -------- Returning Values------- //

var total = calcArea(30, 20); //total variable is storing information so you can access it

function calcArea(w, h){
    var area = w * h;
     return area; // return sends information out to function call
}
console.log(total);

// Procedures; do not return values

 */
//---------------------Anonymous functions-----------------------//

// Also called closures

// Are functions created as the code is run

var calcArea = function(width, height){
    var area = width * height;
     return area;
}

var a = calcArea(20, 30);
console.log(a);

// Anonymous functions must be declared BEFORE their called\
// Anonymous functions are used for scope brevity and m,ake it easier to scope the sub routine within the larger page code


// Named and anonymous functions are both used in modern Javascript. You must know both (I'm looking at you, Michael)