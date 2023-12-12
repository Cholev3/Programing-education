function repainting(input){
let protection = 1.50*(Number(input[0])+2);
let paint = (14.50*Number(input[1]))+(14.50*Number(input[1]))*0.10;
let thinner = 5*(Number(input[2]));
let bags = 0.40;
let total = protection+paint+thinner+bags;
let work = (total*0.30)*(Number(input[3]));
let totalCost = total + work;
console.log (totalCost+ " lv.")



}
repainting (["10", "11", "4" , "8"]);