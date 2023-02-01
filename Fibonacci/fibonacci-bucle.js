
const fibonacci = (num) => {

    if(num < 0) return [0];
    else if(num === 1) return [0, 1];

    let fibonacciSequence = [0, 1];
    // a corresponds to sequence number - 2, 
    //b corresponds to last number,
    //c corresponds to actual number,
    // so in the sequence would be like this.
    //                       a b c
    // fibonacci sequence =  1 1 2 3 5 8 13
    let a = 0;
    let b = 1;
    let c = 2;
    for(let i = 2; i <= num; i++){
        c = a + b;
        a = b;
        b = c;
        fibonacciSequence.push(c);
    }
    
    return fibonacciSequence;
}


console.log(fibonacci(7));
console.log(fibonacci(22));