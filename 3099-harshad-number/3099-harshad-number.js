/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let a = String(x)
        .split("")
        .reduce((sum, num) => sum + Number(num), 0);

    if (x % a === 0) {
        return a;
    }

    return -1;
};