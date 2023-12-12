function passwordGuess(input){
let pass = "s3cr3t!P@ssw0rd";
let attempt = input[0];
   if (pass === attempt) {
    console.log ("Welcome")
}

  else { 
    console.log("Wrong password!")
  }
}
passwordGuess(["s3cr3t!P@ssw0rd"]);