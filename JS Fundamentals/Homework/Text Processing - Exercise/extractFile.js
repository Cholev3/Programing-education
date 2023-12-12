function extractFile(path) {
    let file = path.split('\\').pop();
    let lastDotIdx = file.lastIndexOf('.');
    let name = file.slice(0, lastDotIdx);
    let extension = file.slice(lastDotIdx + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');