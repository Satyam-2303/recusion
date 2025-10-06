function mergeSort(array) {
    let middle=Math.ceil(array.length/2);
if(array.length<=1){
    return array;
}else{
    let left=array.slice(0,middle);
    let right=array.slice(middle,); 
    left=mergeSort(left);
    right=mergeSort(right);
    return merge(left,right);
}
}
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] > right[j]) {
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));

