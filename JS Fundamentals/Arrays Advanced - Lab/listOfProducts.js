function listOfProducts(arr) {
  
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = arr[i];
        let numeration = (`${i + 1}.${currentProduct}`)
        console.log(numeration);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Tomatoes', 'Apples']);