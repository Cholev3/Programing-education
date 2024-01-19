let sortAnArrayBy2Criteria = arr => arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
console.log(sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']));

// function sortAnArrayBy2Criteria(arr) {
//     arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
//     console.log(arr.join('\n'));
// }
// sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);