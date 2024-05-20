document.addEventListener("DOMContentLoaded", () => {
    /* BEGIN - TRANSLATIONS */
    const chooseLanguage = document.getElementById('id_change_language')
    const defaultLanguage = 'en'
    
    changeLanguage(defaultLanguage)

    chooseLanguage.addEventListener('change', () => {
        const selectedLanguage = chooseLanguage.value
        changeLanguage(selectedLanguage)
    })

    function changeLanguage(language) {
        const path = `i18n/${language}.json`
        
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
