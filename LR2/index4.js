alert(`Завдання 4`);
function multiplyNumeric(obj) 
{
    for (let key in obj) 
    {
        if (typeof obj[key] === 'number' ) 
        {
            obj[key] *= 2;
        }
    }
};

let menu = {
    width: 200, 
    height: 300,
    title: "Моє меню"
};
multiplyNumeric(menu);
alert(`Ширина: ${menu.width}, Висота: ${menu.height}`);