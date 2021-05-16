const factorial= (n, accum=1) => {
    if (n<2){
        return accum;
    }
    return factorial(n-1,n*accum); 
};
const fibonacci= (num=0) => {
    if (num===0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}; 
const lucas=(number) => {
    if (number===0) {
        return 2;
    }
    if (number===1) {
        return 1; 
    }
    return lucas(number-1) + lucas(number-2);
}

const fibonacci_like= (a,b1) => {
    return function (n) {
        if (n === 0) {
            return a;
        }
        if (n === 1) { 
            return b1;  
        }
        return fibonacci_like(a,b1)(n-1)+ fibonacci_like(a,b1)(n-2); 
}};

const b=(n) => {
    return fibonacci_like(2308,4261)(n); 
}
console.log(b(10));

console.log(fibonacci_like(2308,4261)(8));

 debugger; 
