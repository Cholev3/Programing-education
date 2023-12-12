function cutAndReverse(text) {
    let divideHalf = text.length / 2;

    let leftHalf = text.slice(0, divideHalf).split('').reverse().join('');
    let rightHalf = text.slice(divideHalf).split('').reverse().join('');
    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');