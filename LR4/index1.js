function ucFirst(str)
{
    let first = word.slice(0,1)
    let second = word.slice(1)
    alert( first.toUpperCase() + second);
}
let word = prompt('Введіть слово');
alert(ucFirst(word))