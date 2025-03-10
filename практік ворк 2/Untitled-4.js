
const a = parseFloat(prompt("Введіть перше число (a):"));
const b = parseFloat(prompt("Введіть друге число (b):"));
const operation = prompt("Введіть операцію (+, -, *, /):");


if (isNaN(a) || isNaN(b)) {
    alert("Введено некоректні числові значення. Будь ласка, введіть числа.");
} else {
    let result;
    

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
     
            if (b === 0) {
                alert("Помилка: Ділення на нуль неможливе!");
 
                throw new Error("Ділення на нуль");
            }
            result = a / b;
            break;
        default:
            alert("Введено неправильну операцію. Використовуйте +, -, *, /");
       
            throw new Error("Неправильна операція");
    }
    
  
    alert(`Результат ${a} ${operation} ${b} = ${result}`);
}