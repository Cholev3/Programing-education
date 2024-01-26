function toggle() {
    let buttonText = document.querySelector("body div span");
    let hiddenText = document.getElementById("extra");


    if (buttonText.textContent == "More") {
        hiddenText.style.display = 'block';
        buttonText.textContent = "Less"

    } else if (buttonText.textContent == "Less") {
        hiddenText.style.display = 'none';
        buttonText.textContent = "More"

    }
}