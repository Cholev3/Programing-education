function sortAnArrayBy2Criteria(arr) {
    arr = arr.join(' ').toLowerCase().split(' ').sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);