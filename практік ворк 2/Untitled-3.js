
const n = parseInt(prompt("Введіть невід'ємне ціле число для обчислення факторіалу:"));


if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    console.log("Введено некоректне значення. Будь ласка, введіть невід'ємне ціле число.");
} else {
   
    if (n === 0) {
        console.log("0! = 1");
    } else {
     
        let factorial = 1;
        let i = 1;
        
       
        while (i <= n) {
            factorial *= i;
            i++;
        }
        
        
        console.log(`${n}! = ${factorial}`);
    }
}
    