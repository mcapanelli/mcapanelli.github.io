/**
 * Created by Michael Ca[panelli on 10/24/13 for Industry Functions assignment.
 */

// This simple function will tell us how many weapons are not in use during our Tuesday class based on student count

// This is where the number will be stored
var total = studentUse();
// This is the name of our function
 function studentUse(){
     //Amount of students attending
     var studentCount = 12
     // Amount of practice weapons available
     var weaponCount = 15
     // This is where determine the amount of weapons not in use during class
     var inUse = weaponCount - studentCount;
     // This is what will be returned to our "total" variable
     return inUse;
 }
// This is what will print to the concol
console.log("We have" + " " + total + " " + "weapons still up on the wall")