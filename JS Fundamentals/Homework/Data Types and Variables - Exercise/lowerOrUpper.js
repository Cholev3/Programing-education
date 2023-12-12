function lowerOrUpper(input){
    let letter = input.charCodeAt()
    if(letter<91){
        console.log('upper-case');
    }else{
    console.log('lower-case');
    }
}
lowerOrUpper('f');