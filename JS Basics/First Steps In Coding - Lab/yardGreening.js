function yardGreening(input){
let sqrf = 7.61*(Number(input[0]));
let discount = 0.18*sqrf;
let total = sqrf-discount;
console.log (`The final price is: ${total} lv.`);
console.log (`The discount is: ${discount} lv.`);

}

yardGreening (["550",]);