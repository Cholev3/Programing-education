function extractText() {
    let list = document.getElementById("items");
    let itemsArr = [];

    let items = Array.from(list.children);

    for (let item of items) {
        itemsArr.push(item.textContent);
    }

    let result = document.getElementById("result");
    result.value = itemsArr.join('\n');
}