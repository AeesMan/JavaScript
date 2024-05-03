function checkSpam(str) {
    let spam = ["росі", "XXX"];
    let sentence = false;

    for (let i = 0; i < spam.length; i++) {
        if (str.indexOf(spam[i]) !== -1) {
            sentence = true;
            break;
        }
    }

    return sentence;
}

let userInput  = prompt( "Введіть рядок: ");
console.log(checkSpam(userInput))