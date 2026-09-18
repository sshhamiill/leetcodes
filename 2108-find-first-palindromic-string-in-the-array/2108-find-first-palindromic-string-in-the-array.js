/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(shaa) {
    

    for (let word of shaa) { 

        let reversed = word.split("").reverse().join("");

        if (word === reversed) {
            return word;
        }
    }

    return "";
}

