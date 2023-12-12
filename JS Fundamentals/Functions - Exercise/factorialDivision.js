function factorialDivision(num1, num2) {
    let firstFactorial = calculateFactorial(num1);
    let secondFactorial = calculateFactorial(num2);

    let result = firstFactorial / secondFactorial;
    
    console.log(result.toFixed(2));

    function calculateFactorial(num){
        let factorial = 1;

        while(num > 1){
            factorial *= num
            num--
        }
        return factorial;
    }
}
factorialDivision(5, 2);