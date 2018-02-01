(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names =["James" , "Madddie" , "Peter" , "Miguel"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);   //James
    console.log(names[1]);   //Maddie
    console.log(names[2]);   //Peter
    console.log(names[3]);   //Miguel
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    var names = ['James', 'Maddie', 'Peter', 'Miguel'];

// loop through the array and log the values
    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    var names = ['James', 'Maddie', 'Peter', 'Miguel'];

    names.forEach(function(name) {
        console.log(name + "is a cool kid")
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first (input) {
        return input[0];    //James
    }
    function second (input) {   //Maddie
        return input[1];
    }function third (input) {    //Miguel
        return input[3];
    }

})();



//1.Write a function called average(numbers) that takes in an array of numbers and returns the average