/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alpha="abcdefghijklmnopqrstuvwxyz"
    sentence=sentence.toLowerCase()
    for(let char of alpha){
        if(!sentence.includes(char)){
            return false
        }
    }
    return true
};