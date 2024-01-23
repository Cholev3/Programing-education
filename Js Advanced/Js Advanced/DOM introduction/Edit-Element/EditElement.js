function editElement(ref, match, replacer) {
    let text = ref.textContent;
    ref.textContent = text.split(match).join(replacer);
}