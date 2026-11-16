/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let a=n.toString().split("")
    let b=a.map((num)=>Number(num))
    let c=b.reduce((sum,num)=>{
        return sum + num
    })
    return c
}