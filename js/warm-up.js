(function() {

    "use strict";

    /*
        ==================================================================================
        Write a function that will return the second character of a passed in string.

          example: returnSecondChar("123")      => returns "2"
          example: returnSecondChar("123abc")   => returns "2"
          example: returnSecondChar("aBc")      => returns "B"
          example: returnSecondChar("a")        => returns ""
          example: returnSecondChar("")         => returns ""

        Remember to test your solution with the above example inputs.
        Add and commit your solution in a branch called yourFirstNameHere-yourLastNameHere.
        ==================================================================================
    */

    function returnSecondChar (word) {
        return word.charAt(1);
    }

        console.log(returnSecondChar("1234"));

})();

