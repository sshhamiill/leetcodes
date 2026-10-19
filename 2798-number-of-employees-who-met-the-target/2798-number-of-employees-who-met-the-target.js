/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    hours.sort((a,b)=>a-b)
  let a=hours.filter((hour)=>{
    return hour >= target
  })
  return(a.length)
};
