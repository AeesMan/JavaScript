function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
  }

let salaries  = {
    "Іван" : 200,
    "Петро" : 300,
    "Марія" : 250
};
alert( sumSalaries(salaries) );