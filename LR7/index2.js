function count(arr){ 

    let sum = 0;
    for (let keys of Object.keys(arr)) {
      sum += 1;
    }
  
    return sum;


}

let user  = {
    name : "Antonny",
    age : 19,
    salary : 250
};
alert( count(user) );