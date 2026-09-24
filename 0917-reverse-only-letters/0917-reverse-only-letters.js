/**
 * @param {string} s
 * @return {string}
 */

    function reverseOnlyLetters(s) {

    let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (!/[a-zA-Z]/.test(arr[left])) {
            left++;
        }
        else if (!/[a-zA-Z]/.test(arr[right])) {
            right--;
        }
        else {

            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    return arr.join("");
}

console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
