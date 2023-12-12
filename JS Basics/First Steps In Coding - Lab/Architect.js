function architect(input){
let arch = input[0];
let project = Number(input[1]);
let hours = (3)*project

console.log(`The architect ${arch} will need ${hours} hours to complete ${project} project/s.`);
}

architect(["Vladimir" , "4"])