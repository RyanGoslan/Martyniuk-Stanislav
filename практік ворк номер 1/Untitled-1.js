
let integerNumber = 42;
let floatNumber = 3.14;
let stringValue = "Привіт, світ!";
let booleanValue = true;


console.log("Початкові значення:");
console.log(`integerNumber = ${integerNumber}, тип: ${typeof integerNumber}`);
console.log(`floatNumber = ${floatNumber}, тип: ${typeof floatNumber}`);
console.log(`stringValue = ${stringValue}, тип: ${typeof stringValue}`);
console.log(`booleanValue = ${booleanValue}, тип: ${typeof booleanValue}`);

console.log("\nЗміна значень змінних:");


integerNumber = 100;
console.log(`integerNumber = ${integerNumber}, тип: ${typeof integerNumber}`);

floatNumber = 2.718;
console.log(`floatNumber = ${floatNumber}, тип: ${typeof floatNumber}`);

stringValue = "JavaScript";
console.log(`stringValue = ${stringValue}, тип: ${typeof stringValue}`);

booleanValue = false;
console.log(`booleanValue = ${booleanValue}, тип: ${typeof booleanValue}`);


console.log("\nПеретворення між типами:");


let numberToString = integerNumber.toString();
console.log(`integerNumber у рядок: ${numberToString}, тип: ${typeof numberToString}`);


let stringToNumber = parseInt(stringValue);
console.log(`stringValue у число: ${stringToNumber}, тип: ${typeof stringToNumber} (NaN означає "Not a Number")`);


let booleanToNumber = Number(booleanValue);
console.log(`booleanValue у число: ${booleanToNumber}, тип: ${typeof booleanToNumber}`);


let concatResult = integerNumber + stringValue;
console.log(`Конкатенація числа і рядка: ${concatResult}, тип: ${typeof concatResult}`);


let mathResult = integerNumber * floatNumber; 
console.log(`Результат множення: ${mathResult}, тип: ${typeof mathResult}`);


let person = {
    name: "Олександр",
    age: 25,
    isStudent: true,
    grades: [95, 88, 92],
    address: {
        city: "Київ",
        street: "Хрещатик",
        building: 10
    }
};


console.log("\nОб'єкт у форматі JSON:");
console.log(JSON.stringify(person, null, 2));