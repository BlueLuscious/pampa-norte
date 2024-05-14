document.addEventListener("DOMContentLoaded", () => {

    /* BEGIN - TRANSLATIONS */
    const chooseLanguage = document.getElementById('id_change_language')
    
    chooseLanguage.addEventListener('change', changeLanguage)

    function changeLanguage() {
        currentLanguage = chooseLanguage.value
        path = 'i18n/' + currentLanguage + '.json'

        fetch(path)
        .then((response) => response.json())
        .then((translations) => {
            const elements = document.querySelectorAll('[data-translate]')
            elements.forEach((element) => {
            const key = element.getAttribute('data-translate')
            element.textContent = translations[key]
            })
        })
    }
    /* END - TRANSLATIONS */

})
