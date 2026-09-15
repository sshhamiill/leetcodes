/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let qwert=String(n)
    let qwerty=qwert.split("").reduce((sum,num)=>{
        return sum+Number(num)
    },0)
    let res=qwert.split("").reduce((total,num)=>{
        return total*Number(num)
    },1)

    let result=res-qwerty
    return result

};