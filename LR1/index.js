alert("Привіт!");
let login = prompt('Введіть логін', undefined);
if(login == 'Admin')
{
    let password = prompt('Введіть пароль', undefined);
    if (password == 'Господар')
    {
        alert("Ласкаво просимо!");
    }
    
    else if(login == null)
    {
        alert("Скасовано!");
    }

    else
    {
        alert("Неправильний пароль!");
    }
}
else if(login == null)
{
    alert("Скасовано!");
}

else
{
    alert("Неправильний логін!");
}
