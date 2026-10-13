/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let a=String(n)
    let b=a.split("")
    let c=b.reduce((sum,num)=>{
        return Number(sum)+Number(num)
    })
    let d=b.reduce((sum,num)=>{
        return sum*num
    })
    let e=c+d
    if(n%e===0){
        return true
    }
    else{
        return false
    }
};