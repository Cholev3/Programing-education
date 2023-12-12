function login(input) {
    let userName = input[0];
    let pass = '';

    for (let i = userName.length - 1; i >= 0; i--) {
        pass += userName[i]

    }
    let index = 1
    let attempt = input[index];
    let failedAtempt = 0;
    while (attempt != pass) {
        failedAtempt++
        if (failedAtempt == 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");

        index++
        attempt = input[index]

    }
    console.log(`User ${userName} logged in.`);

}
login(['Acer', 'login', 'go', 'let me in', 'recA'])