
function random(min, max) {
    return min + Math.random() * (max - min);
}

let randomValue = random(1, 5);
alert(`Випадкове число: ${randomValue}`);