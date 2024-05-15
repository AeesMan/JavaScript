const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let counter = 0;
let counterValueElement = document.getElementById('counterValue'); 

function CountDec() {
    counter--;
    
    if (counter < 0)
    {
        counterValueElement.style.color = 'red';
    }
    else if (counter == 0)
    {
        counterValueElement.style.color = '#222';
    }
    else if (counter > 0)
    {
        counterValueElement.style.color = 'green';
    }
    updateCounterValue();
}


function CountRes() {
    counter = 0;
    counterValueElement.style.color = '#222';
    updateCounterValue();
}


function CountInc() {
    counter++;
    if (counter < 0)
    {
        counterValueElement.style.color = 'red';
    }
    else if (counter == 0)
    {
        counterValueElement.style.color = '#222';
    }
    else if (counter > 0)
    {
        counterValueElement.style.color = 'green';
    }
    updateCounterValue();
}

function updateCounterValue() {
    counterValueElement.textContent = counter;
}