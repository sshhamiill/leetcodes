/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let out=nums.filter((num)=>String(num).length%2===0)
    return out.length
};