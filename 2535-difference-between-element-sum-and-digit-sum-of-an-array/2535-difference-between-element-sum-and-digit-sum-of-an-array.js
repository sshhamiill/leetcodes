/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let res=nums.reduce((sum,num)=>{
    return sum+num
},0)

let asd=String(nums).replaceAll(",","")
let fgh=asd.split("").reduce((sum,num)=>{
    return sum+Number(num)
},0)
return res-fgh
};