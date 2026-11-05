/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     let stack = [];

    for (let char of s) {
        let last = stack[stack.length - 1];

        if (last && Math.abs(last.charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};