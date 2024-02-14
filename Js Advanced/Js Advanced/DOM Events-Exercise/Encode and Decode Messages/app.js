function encodeAndDecodeMessages() {
    const encodeBtnRef = Array.from(document.querySelectorAll('button'))[0];
    const decodeBtnRef = Array.from(document.querySelectorAll('button'))[1];
    const firstTextareaRef = Array.from(document.querySelectorAll('textarea'))[0];
    const secondTextareaRef = Array.from(document.querySelectorAll('textarea'))[1];

    encodeBtnRef.addEventListener('click', encodeMessage);
    decodeBtnRef.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let newCharsArr = [];
        let textValue = firstTextareaRef.value;
        let splitChars = textValue.split('');

        for (let char of splitChars) {
            let charCode = Number(char.charCodeAt());
            let increment = charCode + 1;
            let newChar = String.fromCharCode(increment);
            newCharsArr.push(newChar);
        }

        let encodedMessage = newCharsArr.join('');
        firstTextareaRef.value = '';
        secondTextareaRef.value = encodedMessage;
    }

    function decodeMessage() {
        let newCharsArr = [];
        let textValue = secondTextareaRef.value;
        let splitChars = textValue.split('');

        for (let char of splitChars) {
            let charCode = Number(char.charCodeAt());
            let increment = charCode - 1;
            let newChar = String.fromCharCode(increment);
            newCharsArr.push(newChar);
        }

        let decodedMessage = newCharsArr.join('');
        secondTextareaRef.value = decodedMessage;
    }
}