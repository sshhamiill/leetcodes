/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr=[]
 for (let char of s){
    if(char==="I"){
        arr.push(1)
    }
    else if(char==="V"){
        arr.push(5)
    }
    else if(char==="X"){
        arr.push(10)
    }
    else if(char==="L"){
        arr.push(50)
    }
    else if(char==="C"){
        arr.push(100)
    }
    else if(char==="D"){
        arr.push(500)
    }
    else if(char==="M"){
        arr.push(1000)
    }
 }
 let total = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < arr[i + 1]) {
            total = total - arr[i];
        }
        else {
            total = total + arr[i];
        }
    }

    return total;
};