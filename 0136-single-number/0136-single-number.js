/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res=nums.filter(num=>
    nums.indexOf(num)=== nums.lastIndexOf(num)
    )
    return Number(res)
};