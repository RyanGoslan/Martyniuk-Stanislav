


function getUserNumber(message) {
    const input = prompt(message);
    return parseFloat(input);
}


function calculateAverage() {
    console.log("Введіть три числа:");
    
  
    const num1 = getUserNumber("Введіть перше число:");
    const num2 = getUserNumber("Введіть друге число:");
    const num3 = getUserNumber("Введіть третє число:");
    
   
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Будь ласка, введіть коректні числові значення.");
        return;
    }
    
   
    const average = (num1 + num2 + num3) / 3;
    console.log(`Введені числа: ${num1}, ${num2}, ${num3}`);
    console.log(`Середнє арифметичне: ${average}`);
    
   
    console.log("\nРезультати різних операцій:");
    
    
    console.log(`Модуль числа ${num1}: ${Math.abs(num1)}`);
    console.log(`Модуль числа ${num2}: ${Math.abs(num2)}`);
    console.log(`Модуль числа ${num3}: ${Math.abs(num3)}`);
    
   
    console.log(`Округлення ${num1} у більшу сторону: ${Math.ceil(num1)}`);
    console.log(`Округлення ${num2} у більшу сторону: ${Math.ceil(num2)}`);
    console.log(`Округлення ${num3} у більшу сторону: ${Math.ceil(num3)}`);
    
   
    console.log(`Округлення ${num1} у меншу сторону: ${Math.floor(num1)}`);
    console.log(`Округлення ${num2} у меншу сторону: ${Math.floor(num2)}`);
    console.log(`Округлення ${num3} у меншу сторону: ${Math.floor(num3)}`);
    
    
    console.log(`${num1} у квадраті: ${Math.pow(num1, 2)}`);
    console.log(`${num2} у квадраті: ${Math.pow(num2, 2)}`);
    console.log(`${num3} у квадраті: ${Math.pow(num3, 2)}`);
    
    
    console.log("\nПеревірка ділення без залишку:");
    
    const checkDivisibility = (number, divisor) => {
        return number % divisor === 0;
    };
    
    console.log(`${average} ділиться на 5 без залишку: ${checkDivisibility(average, 5)}`);
    console.log(`${average} ділиться на 7 без залишку: ${checkDivisibility(average, 7)}`);
    
   
    console.log("\nПеревірка існування трикутника зі сторонами:", num1, num2, num3);
    
    const canTriangleExist = (a, b, c) => {
        return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
    };
    
    const triangleExists = canTriangleExist(num1, num2, num3);
    console.log(`Трикутник зі сторонами ${num1}, ${num2}, ${num3} ${triangleExists ? 'може' : 'не може'} існувати`);
    
    return { num1, num2, num3, average };
}


const result = calculateAverage();