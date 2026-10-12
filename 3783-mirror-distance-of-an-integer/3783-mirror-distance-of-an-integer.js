/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
   let a= String(n)
   let b=a.split("").reverse().join("")
   let c=Number(a)-Number(b)
   if(c < 0){
   return c*-1
   }
   else{
    return c
   }
};

