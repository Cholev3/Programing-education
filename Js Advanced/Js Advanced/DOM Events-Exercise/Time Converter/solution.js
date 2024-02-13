function attachEventsListeners() {
    const inputsRef = document.querySelectorAll("div input[type=text]")
    const buttonsRef = Array.from(document.querySelectorAll("div input[type=button]"));


    for (let button of buttonsRef) {
        button.addEventListener("click", converHandler);
    }

    function converHandler(button) {
        let timeUnit = button.currentTarget.parentElement.children[1].id;
        let inputValue = Number(button.currentTarget.parentElement.children[1].value);

        switch (timeUnit) {
            case 'days': convert(inputValue);
                break;
            case 'hours': convert(inputValue / 24);
                break;
            case 'minutes': convert(inputValue / 1440);
                break;
            case 'seconds': convert(inputValue / 86400);
                break;
        }
    }

    function convert(days) {
        inputsRef[0].value = days;
        inputsRef[1].value = Number(days) * 24;
        inputsRef[2].value = Number(days) * 1440;
        inputsRef[3].value = Number(days) * 86400;
    }
}
