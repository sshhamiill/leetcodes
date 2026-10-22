/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let a=details.map((set=>Number(set.slice(11))))
    let b=a.filter(num=>num>=6100)
        return b.length
};