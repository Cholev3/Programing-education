function solve() {
  let textAreaRef = document.getElementById("input");
  let outputRef = document.getElementById("output");
  let counter = 0;

  let textArray = textAreaRef.value.split(".");
  textArray.pop();
  let paragraphArray = [];

  if (textAreaRef.value.length > 0) {
    for (let sentence of textArray) {
      counter++;
      paragraphArray.push(sentence);
      if (counter == 3) {
        let paragraphText = paragraphArray.join('.');
        let p = document.createElement("p");
        p.innerHTML = (`${paragraphText}.`)
        outputRef.appendChild(p);
        counter = 0;
        paragraphArray = [];
      }

    }

    if (paragraphArray.length == 1) {
      let singleText = paragraphArray.join('');
      let singleTextPara = document.createElement("p");
      singleTextPara.innerHTML = (`${singleText}.`);
      outputRef.appendChild(singleTextPara);

    } else if (paragraphArray.length > 1) {
      let remainingText = paragraphArray.join('.');
      let lastP = document.createElement("p");
      lastP.innerHTML = (`${remainingText}.`)
      outputRef.appendChild(lastP);
    }
  }
}