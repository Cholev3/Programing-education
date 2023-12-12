function addAndSubtract(a, b, c){
    let result = add(a,b);
    let finalResult = subtract(result, c)
    console.log(finalResult);


    function add(num1, num2){
        return num1 + num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }
}
addAndSubtract(23,6,10)