function getFibonator() {
    let current = 0;
    let next = 1;
    let isFirstCall = true;

    return function () {
        if (isFirstCall) {
            isFirstCall = false;
            return 1;
        } else {
            const result = current;
            current = next;
            next = result + current;
            return next;
        }
    };
}

// Test the function
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13