function foodDelivery(input){
let chicken = 10.35*(Number(input[0]));
let fish = 12.40*(Number(input[1])); 
let veg = 8.15*(Number(input[2]));
let totalFood = chicken+fish+veg;
let dessert = totalFood*0.20;
let delivery = 2.50;


console.log(totalFood+dessert+delivery+" lv.");


}
foodDelivery(["2", "4", "3"]);