function passwordGenerator(arr) {
    let concatinatedStr = arr[0] + arr[1];
    let word = arr[2];
    let vowels = ['a', 'e', 'o', 'u', 'i'];
    let password = '';
    let index = 0;

    for (let char of concatinatedStr) {
        if (vowels.includes(char)) {
            if (index == word.length) {
                index = 0;
            }
            char = word[index].toUpperCase();
            index++;
        }
        password += char;
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);