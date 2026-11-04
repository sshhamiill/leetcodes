/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
   let a=Number(num.toString().split("").reverse().join(""))
   let b=Number(a.toString().split("").reverse().join(""))
    return num===b
};