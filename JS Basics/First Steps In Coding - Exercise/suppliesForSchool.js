function suppliesforSchool(input){
let pens = 5.80*(Number(input[0]));
let markers = 7.20*(Number(input[1]));
let detergent = 1.20*(Number(input[2]));
let total = (pens+markers+detergent);
let discount = total*((Number(input[3]))/100);
let finalPrice = total-discount;

console.log (finalPrice + " lv." );

}
suppliesforSchool(["2", "3", "4", "25"]);