function solve() {
  let inputTextRef = document.getElementById("text");
  let conventionRef = document.getElementById("naming-convention");
  let result = document.getElementById("result");
  let textToLowerCase = inputTextRef.value.toLowerCase();

  let resultArr = [];
  let splitText;

  if (conventionRef.value == "Camel Case") {
    splitText = textToLowerCase.split(" ");
    resultArr.push(splitText.shift());
    splitText.forEach(word => resultArr.push((word[0].toUpperCase()) + word.substring(1)));

  } else if (conventionRef.value == "Pascal Case") {
    splitText = textToLowerCase.split(" ");
    splitText.forEach(word => resultArr.push((word[0].toUpperCase()) + word.substring(1)));

  } else {
    resultArr.push('Error!')
  }

  result.textContent = resultArr.join("")

}