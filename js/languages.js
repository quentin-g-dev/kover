// Avalaible for langCode : 'EN', 'FR'(default), 'ES'

function translateTo(langCode) {
    var elements = document.querySelectorAll('html *');

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].innerHTML != "" && elements[i].innerHTML != " ") {
            let elementToTest = elements[i].innerHTML;

            for (let j = 0; j < translations.length; j++) {
                if (elementToTest.trim() === translations[j].french.trim() || elementToTest.trim() === translations[j].english.trim() || elementToTest.trim() === translations[j].spanish.trim()) {
                    switch (langCode) {
                        case 'EN':
                            elements[i].innerHTML = translations[j].english;
                            break;
                        case 'FR':
                            elements[i].innerHTML = translations[j].french;
                            break;
                        case 'ES':
                            elements[i].innerHTML = translations[j].spanish;
                            break;
                        default:
                            elements[i].innerHTML = translations[j].french;
                            break;
                    }
                }
            }
        }
    }
}


//////////////////////////////////////////////////////////// EXECUTION
var lang = 'FR';
translateTo(lang);
document.querySelector(".selectLang").addEventListener("change", function () {
    lang = document.querySelector(".selectLang").value;
    console.log(lang);
    translateTo(lang);
    setSessionLang("./ajax/session_lang.php?lang=" + lang + "", lang);
});
