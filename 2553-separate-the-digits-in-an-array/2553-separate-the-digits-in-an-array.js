/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
     let a=String(nums).replaceAll(",","")
    let b=a.split("")
    let c=b.map((num)=>Number(num))
    return c
};