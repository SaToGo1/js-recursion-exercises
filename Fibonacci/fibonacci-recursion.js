const fibonacci = (num) => {

    if(num <= 0) return 0
    else if(num <= 2) return 1
    
    return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(fibonacci(7));
console.log(fibonacci(22));

