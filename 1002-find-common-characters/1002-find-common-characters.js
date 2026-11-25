/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];

    let first = words[0].split("");

    for (let char of first) {

        let found = true;

        for (let i = 1; i < words.length; i++) {

            let index = words[i].indexOf(char);

            if (index === -1) {
                found = false;
                break;
            }

            words[i] =
                words[i].slice(0, index) +
                words[i].slice(index + 1);
        }

        if (found) {
            result.push(char);
        }
    }

    return result;
}
