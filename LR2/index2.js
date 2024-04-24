function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
alert("Завдання 2");
let schedule = {};
alert( isEmpty(schedule) );
schedule["9.00"] = "Вставай"; 
alert( isEmpty(schedule) );
