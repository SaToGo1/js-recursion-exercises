

const mergeSort = (arr) => {
    
    let mid = arr.length/2;

    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid, arr.length);

    if(firstHalf.length > 1){
        firstHalf =mergeSort(firstHalf);
    }

    if(secondHalf.length > 1){
        secondHalf = mergeSort(secondHalf);
    }

    // merge both halfs and 
    // return a single sorted array.
    return merge(firstHalf, secondHalf) 
}

const merge = (firstHalf, secondHalf) => {
    //index of the first half
    let indexFH = 0;
    //index of the second half
    let indexSH = 0;

    let mergedArray = []

    // loop until one of both arrays are completed.
    // we compare first element of both array and push
    // into merged array the smallest value.
    while( (indexFH < firstHalf.length) && (indexSH < secondHalf.length)){
        if(firstHalf[indexFH] < secondHalf[indexSH]){
            mergedArray.push(firstHalf[indexFH]);
            indexFH++;
        } else{
            mergedArray.push(secondHalf[indexSH]);
            indexSH++;
        }
    }

    // if we get to the end of one of the half arrays
    // we push into the merged array the rest of our 
    // half array.
    if(indexFH >= firstHalf.length){
        mergedArray.push(...secondHalf.slice(indexSH));
    }else if(indexSH >= secondHalf.length){
        mergedArray.push(...firstHalf.slice(indexFH));
    }

    return mergedArray;
}


let arr = [5,1,13,72,2,95,2,0,32,47,83,5,93,3];
console.log(mergeSort(arr));
