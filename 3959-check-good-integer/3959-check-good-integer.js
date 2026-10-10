/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
 let a=String(n)
 let b=a.split("") 
 let c=b.reduce((a,b)=>{
    return Number(a)+Number(b)
 })
let d=b.map((a)=>Number(a)*Number(a)).reduce((a,b)=>{
    return Number(a)+Number(b)
 })
 
 if(d-c >= 50){
    return true
 }
 else{
    return false
 }
};
