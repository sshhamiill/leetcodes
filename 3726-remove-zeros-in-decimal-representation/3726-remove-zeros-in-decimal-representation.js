/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let abc=String(n)
    let b=abc.replace(/0/g,"")
    let c=Number(b)
    return c
};