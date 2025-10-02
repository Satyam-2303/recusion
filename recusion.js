
function fibArray(number){
    let arr=[0,1];
    for(let i=2;i<=number;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fibArray(6));
console.log(fibArray(7));
console.log(fibArray(8));
console.log(fibArray(9));
console.log(fibArray(10));
console.log(fibArray(11));