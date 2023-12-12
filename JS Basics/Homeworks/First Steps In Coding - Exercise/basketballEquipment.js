function basketballEquipment(input){
let sneakers = (Number(input[0]))-((Number(input[0]))*0.40);
let jersey = sneakers-(sneakers*0.20);
let ball = jersey*0.25;
let accessories = ball*0.20;
let tax = Number(input[0]);
let totalCost = (sneakers+jersey+ball+accessories+tax+" lv.");



console.log (totalCost)
}
basketballEquipment (["365"])