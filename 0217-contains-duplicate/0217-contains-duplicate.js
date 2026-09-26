/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let abc=new Set(nums).size !== nums.length
    return abc
};