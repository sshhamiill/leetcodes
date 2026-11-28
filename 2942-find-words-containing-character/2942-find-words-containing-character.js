/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let a = [];

    words.forEach((word, index) => {
        if (word.toLowerCase().includes(x.toLowerCase())) {
            a.push(index);
        }
    });

    return a
};