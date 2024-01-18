function stringLength(...rest) {
    let count = rest.join('').length;
    console.log(count);
    console.log(Math.floor(count / rest.length));
}
stringLength('chocolate', 'ice cream', 'cake');