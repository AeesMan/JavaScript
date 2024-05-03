function truncate(str, maxlength)
{
    let max = str.length
    if (max > maxlength)
    {
        alert(str.slice(0, maxlength) + "...")
    }
    else alert(str)
}

word = prompt("Введіть рядок: ")
maximum = prompt("Введіть максимальну довжину: ")
truncate(word,maximum)