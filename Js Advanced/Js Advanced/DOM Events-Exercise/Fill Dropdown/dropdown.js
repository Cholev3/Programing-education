function addItem() {
    const textRef = document.getElementById("newItemText");
    const valueRef = document.getElementById("newItemValue");
    const menuRef = document.getElementById("menu");

    let option = document.createElement('option');
    option.textContent = textRef.value;
    option.value = valueRef.value;

    menuRef.appendChild(option);
    valueRef.value = '';
    textRef.value = '';
}