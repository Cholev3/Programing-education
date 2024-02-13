function lockedProfile() {
    const showButtonRef = Array.from(document.querySelectorAll('div button'));
    const hiddenInfoRef = Array.from(document.querySelectorAll('div'));

    for (let button of showButtonRef) {
        button.addEventListener('click', showContent)
    }

    function showContent(e) {
        let button = e.target;
        let btnParent = button.parentElement;
        let currentRadioButton = btnParent.querySelector('input[value = "unlock"]')

        if (currentRadioButton.checked) {

            if (button.textContent == 'Show more') {
                let parent = e.currentTarget.parentElement;
                let hiddenDiv = parent.querySelector('div')
                hiddenDiv.style.display = 'block';
                button.textContent = 'Hide it'
            } else if (button.textContent == 'Hide it') {
                let parent = e.currentTarget.parentElement;
                let hiddenDiv = parent.querySelector('div')
                hiddenDiv.style.display = 'none';
                button.textContent = 'Show more'

            }
        }
    }
}