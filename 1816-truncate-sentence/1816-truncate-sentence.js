/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
      let a=s.split(" ")
    let b=a.slice(0,k).join(" ")
    return b
};