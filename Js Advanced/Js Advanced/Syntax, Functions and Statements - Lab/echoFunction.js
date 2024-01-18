function echoFunction(str) {
    let strArr = str.split('');
    console.log(strArr.length);
    console.log(strArr.join(''));
}
echoFunction('Hello, JavaScript!');