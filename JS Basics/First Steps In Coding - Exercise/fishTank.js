function fishTank(input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);    
let percentage =(Number(input[3])/100);     
let volume = lenght*width*height;    
let liters = volume/1000;     
 let litersLeft = liters- (liters*percentage);   
    



console.log (litersLeft+" l.")


}
fishTank (["85", "75", "47", "17"]);