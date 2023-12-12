function depositCalculator(input){
let deposit = Number(input[0]);
let term = Number(input[1]);
let air = Number(input[2]);
let totalForOneYear = deposit*(air/100);
let totalForOneMonth = totalForOneYear/12;
let TotalSum = deposit + (totalForOneMonth*term);
console.log (TotalSum);

}
depositCalculator (["200" , "3" , "5.7"])