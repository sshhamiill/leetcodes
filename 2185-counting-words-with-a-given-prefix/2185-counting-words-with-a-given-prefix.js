/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let newwords=words.filter((word)=>(
    word.startsWith(pref)
    ))
 return newwords.length
}