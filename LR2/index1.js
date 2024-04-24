alert("Завдання 1")
const user = {name: undefined, surname: undefined};

user.name = "Марк";
alert(`Ім'я: ${user.name}, Прізвище: ${user.surname}`);
user.surname = "Сміт";
alert(`Ім'я: ${user.name}, Прізвище: ${user.surname}`);
user.name = "Тарас";
alert(`Ім'я: ${user.name}, Прізвище: ${user.surname}`);
delete user.name;
alert(`Ім'я: ${user.name}, Прізвище: ${user.surname}`);