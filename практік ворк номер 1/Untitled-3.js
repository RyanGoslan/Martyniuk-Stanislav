
function getValue(message) {
    return prompt(message);
}


function compareThreeValues() {

    const value1 = parseFloat(getValue("Введіть перше число:"));
    const value2 = parseFloat(getValue("Введіть друге число:"));
    const value3 = parseFloat(getValue("Введіть третє число:"));
    

    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        console.log("Будь ласка, введіть коректні числові значення.");
        return;
    }
    
    console.log(`Введені числа: ${value1}, ${value2}, ${value3}`);
    

    const max = Math.max(value1, value2, value3);
    console.log(`Найбільше значення: ${max}`);
    

    const min = Math.min(value1, value2, value3);
    console.log(`Найменше значення: ${min}`);
    

    const isEven = (num) => num % 2 === 0;
    

    const hasEvenNumber = isEven(value1) || isEven(value2) || isEven(value3);
    console.log(`Хоча б одне з чисел є парним: ${hasEvenNumber}`);

    console.log(`${value1} є парним: ${isEven(value1)}`);
    console.log(`${value2} є парним: ${isEven(value2)}`);
    console.log(`${value3} є парним: ${isEven(value3)}`);
    

    const complexCondition = value1 > value2 && value2 < value3;
    console.log(`Умова "перше число > другого, а друге < третього": ${complexCondition}`);
    

    function isPrime(num) {
  
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
    

    console.log(`\nПеревірка на простоту чисел:`);
    console.log(`${value1} є простим числом: ${isPrime(value1)}`);
    console.log(`${value2} є простим числом: ${isPrime(value2)}`);
    console.log(`${value3} є простим числом: ${isPrime(value3)}`);
    
    return { value1, value2, value3, max, min, hasEvenNumber, complexCondition };
}


const comparisonResult = compareThreeValues();