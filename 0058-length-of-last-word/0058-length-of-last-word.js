/**
 * @param {string} s
 * @return {number}
 */
let str= "Hello World"
function lengthOfLastWord(str){
    let e=str.trim()
    let b=e.split(" ")
    let d=b[b.length-1]
    let c=d.length
    return c
}
console.log(lengthOfLastWord(str))
    