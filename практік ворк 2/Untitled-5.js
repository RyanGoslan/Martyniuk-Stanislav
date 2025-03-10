
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = false;

console.log("Гра 'Вгадай число' розпочалася!");
console.log("Було загадане число від 1 до 100. Спробуйте його вгадати.");


do {

    const userGuess = parseInt(prompt("Введіть ваше число (від 1 до 100):"));
    attempts++;
    

    if (isNaN(userGuess)) {
        alert("Введено некоректне значення. Будь ласка, введіть число.");
        continue;
    }
    

    if (userGuess < 1 || userGuess > 100) {
        alert("Число повинно бути в діапазоні від 1 до 100.");
        continue;
    }
    

    if (userGuess < randomNumber) {
        alert("Загадане число більше.");
    } else if (userGuess > randomNumber) {
        alert("Загадане число менше.");
    } else {
        alert(`Вітаємо! Ви вгадали число ${randomNumber} за ${attempts} спроб!`);
        guessed = true;
    }
} while (!guessed);

console.log(`Гра завершена. Ви вгадали число ${randomNumber} за ${attempts} спроб.`);