"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color==="blue") {
//         console.log ("blue is the color of the sky")
//     }
//     else if (color==="red") {
//         console.log ("red is the color of roses ")
//     }
//     else if (color==="orange") {
//         console.log ("orange is the color of oranges ")
//     }
//     else if (color==="yellow") {
//         console.log ("yellow is the color of the sun ")
//     }
//     else if (color==="green") {
//         console.log ("green is the color of the grass ")
//     }
//     else if (color==="indigo") {
//         console.log ("indigo is the color of the indigo crayon ")
//     }
//     else  {
//         console.log ("violet is the color of violets ")
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// analyzeColor(randomColor)
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             console.log("blue is the color of the sky");
//             break;
//         case "red":
//             console.log("red is the color of roses");
//             break;
//         case "orange":
//             console.log("orange is the color of oranges");
//             break;
//         case "yellow":
//             console.log("yellow is the color of the sun");
//             break;
//         case "green":
//             console.log("green is the color of the grass");
//             break;
//         case "indigo":
//             console.log("indigo is the color of the indigo crayon");
//             break;
//         case "violet":
//             console.log("violet is the color of violets");
//             break;
//         default:
//             console.log("I'm sorry I don't know any about" + color)
//     }
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//  var  color = prompt("Please input a color");
// analyzeColor(color)
//
//  function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert("red is the color of roses");
//             break;
//         case "orange":
//             alert("orange is the color of oranges");
//             break;
//         case "yellow":
//             alert("yellow is the color of the sun");
//             break;
//         case "green":
//             alert("green is the color of the grass");
//             break;
//         case "indigo":
//             alert("indigo is the color of the indigo crayon");
//             break;
//         case "violet":
//             alert("violet is the color of violets");
//             break;
//         default:
//             alert("I'm sorry I don't know any about" + color)
//     }
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor(Math.random() * 5);
// alert ("Your lucky number is " + luckyNumber);
// calculateTotal(luckyNumber)
// function calculateTotal(luckyNumber){
//     if (luckyNumber=== "0"){
//         alert ("Sorry! You did not receive a discount.")
//     }
//     else if(luckyNumber === 1){
//         alert("Congrats!You get a 10% discount!")
//     }
//     else if(luckyNumber === 2){
//         alert("Congrats!You receive a 25% discount.")
//     }else if(luckyNumber === 3){
//         alert("Congrats!You receive a 35% discount.")
//     }else if(luckyNumber === 4){
//         alert("Congrats!You receive a 50% discount")
//     }else {
//         alert("Congrats!You get it all for free")
//     }
// }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
 prompt ("What was the total of your Bill?");
calculateTotal(luckyNumber)
function calculateTotal(luckyNumber){
    if (luckyNumber=== 0){
        alert ("Sorry... You did not receive a discount.")
    }
    else if(luckyNumber === 1){
        alert("Nice! You get a 10% discount!")
    }
    else if(luckyNumber === 2){
        alert("Wow! You receive a 25% discount.")
    }else if(luckyNumber === 3){
        alert("Cool! You receive a 35% discount.")
    }else if(luckyNumber === 4){
        alert("Woah! You receive a 50% discount.")
    }else {
        alert("Congrats! You get it all for free!")
    }
}
