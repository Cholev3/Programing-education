function addAndRemoveElements(arr) {
    let newArr = [];
    let command;

    for (let i = 0; i < arr.length; i++) {

        if (arr.length > 0) {
            command = arr[i];
        } else {
            break;
        }

        let action = command == 'add' ? newArr.push(i + 1) : newArr.pop();
    }

    let result = newArr.length <= 0 ? console.log('Empty') : console.log(newArr.join('\n'));;
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);