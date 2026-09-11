/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let abc=String(x)
    
        if(abc.split("").reverse().join("")===abc){
        return true
    }
    else{
        return false
    }
};