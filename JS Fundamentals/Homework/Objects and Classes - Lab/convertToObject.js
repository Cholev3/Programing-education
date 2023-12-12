function convertToObject(str) {
    let parsedStr = JSON.parse(str);
    for (let keys of Object.keys(parsedStr)) {

        console.log(`${keys}: ${parsedStr[keys]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')