function solve() {
  const textAreaRef = document.querySelector('textarea[rows="5"]');
  const generateBtnRef = document.querySelector('button');
  const buyBtnRef = Array.from(document.querySelectorAll('button'))[1];
  const tableBodyRef = document.querySelector('tbody');
  const resultAreaRef = document.querySelector('textarea[rows="4"]');


  generateBtnRef.addEventListener('click', generate);
  buyBtnRef.addEventListener('click', buyProducts);

  function generate() {
    let input = textAreaRef.value;
    let furnitureArr = JSON.parse(input);

    for (let object of furnitureArr) {
      createRow(object);
    }
  }

  function createRow(object) {
    let newRow = document.createElement('tr');

    let imageTD = document.createElement('td');
    let createImg = document.createElement('img');
    createImg.src = object.img;
    imageTD.appendChild(createImg);
    newRow.appendChild(imageTD);

    let nameTD = document.createElement('td');
    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = object.name;
    nameParagraph.name = 'furniture'
    nameTD.appendChild(nameParagraph);
    newRow.appendChild(nameTD);

    let priceTD = document.createElement('td');
    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = object.price;
    priceParagraph.name = 'price';
    priceTD.appendChild(priceParagraph);
    newRow.appendChild(priceTD);

    let decorFactorTD = document.createElement('td');
    let decFactorParagraph = document.createElement('p');
    decFactorParagraph.textContent = object.decFactor;
    decFactorParagraph.name = 'decFactor'
    decorFactorTD.appendChild(decFactorParagraph);
    newRow.appendChild(decorFactorTD);

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    newRow.appendChild(checkBox);

    tableBodyRef.appendChild(newRow);
  }

  function buyProducts() {
    const checkboxesRef = document.querySelectorAll('input[type="checkbox"]');
    let checkBoxes = Array.from(checkboxesRef);
    let nameArr = [];
    let sum = 0;
    let decFactorSum = 0;
    let counter = 0;


    for (let check of checkBoxes) {
      if (check.checked) {
        counter++;

        let parent = check.parentElement;
        let paragraphs = Array.from(parent.querySelectorAll('p'));

        let name = paragraphs[0].textContent;
        nameArr.push(name);

        let price = Number(paragraphs[1].textContent);
        sum += price;

        let decFactor = Number(paragraphs[2].textContent);
        decFactorSum += decFactor;
      }

    }
    let resultArr = [];
    let items = nameArr.join(', ')
    let boughtItems = (`Bought furniture: ${items}`);
    resultArr.push(boughtItems);

    let sumStr = (`Total price: ${sum.toFixed(2)}`);
    resultArr.push(sumStr);

    let avgDecFactor = decFactorSum / counter;
    let avgDecStr = (`Average decoration factor: ${avgDecFactor}`);
    resultArr.push(avgDecStr);

    resultAreaRef.value = resultArr.join('\n')
  }
}



// '-------------------------------------------------------------------------'


// function solve() {
//   const [inputAreaRef, resultAreaRef] = document.querySelectorAll('textarea');
//   const [generateBtnRef, buyBtnRef] = document.querySelectorAll('button');
//   let tableRow = document.querySelector('tbody');
//   generateBtnRef.addEventListener('click', generateInput);
 
//   function generateInput(event) {
//     let data = JSON.parse(inputAreaRef.value);
//     for (let item of data) {
//       let tr = document.createElement('tr'); //creating elements manually below
//       tr.innerHTML += `<td><img src=${item.img}></td>`;
//       tr.innerHTML += `<td><p>${item.name}</p></td>`;
//       tr.innerHTML += `<td><p>${item.price}</p></td>`;
//       tr.innerHTML += `<td><p>${item.decFactor}</p></td>`;
//       tr.innerHTML += `<td><input type='checkbox'></td>`;
//       tableRow.appendChild(tr);
//     }
//   }
 
//   buyBtnRef.addEventListener('click', buyHandler);
 
//   function buyHandler(event) {
//     let name = [];
//     let price = 0;
//     let sumDecFac = 0;
//     let selectedRows = document.querySelectorAll(
//       'input[type="checkbox"]:checked'
//     );
//     for (let checkbox of selectedRows) {
//       let [imgRef, nameRef, priceRef, decFactorRef] = Array.from(
//         checkbox.parentElement.parentElement.children
//       );
//       let nameValue = nameRef.children[0].textContent;
//       let priceValue = Number(priceRef.children[0].textContent);
//       let decFactorValue = Number(decFactorRef.children[0].textContent);
//       name.push(nameValue);
//       price += priceValue;
//       sumDecFac += decFactorValue;
//     }
//     resultAreaRef.value = `Bought furniture: ${name.join(
//       ', '
//     )}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${
//       sumDecFac / name.length
//     }`;
//   }
// }