
const resultsElement = document.getElementById('results');
const runButton = document.getElementById('runButton');

function logToResults(message) {
    const logLine = document.createElement('p');
    logLine.textContent = message;
    resultsElement.appendChild(logLine);

    console.log(message);
}

function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1; 
            logToResults(`Згенеровано випадкове число: ${randomNumber}`);
            resolve(randomNumber);
        }, 1000);
    });
}

async function processNumber() {
    try {
        const number = await getRandomNumber();
        

        if (number < 50) {
            return await Promise.resolve(number + 20);
        } else {
            return await Promise.reject("Занадто велике число!");
        }
    } catch (error) {
        logToResults(`Помилка: ${error}`);
        return "Оброблено помилку";
    }
}

runButton.addEventListener('click', async () => {
    logToResults("--- Новий запуск ---");

    const result = await processNumber();
    logToResults(`Результат: ${result}`);
});

window.addEventListener('load', async () => {
    logToResults("--- Перший запуск ---");

    const result = await processNumber();
    logToResults(`Результат: ${result}`);
});