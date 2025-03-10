
const userAge = parseInt(prompt("Будь ласка, введіть свій вік:"));


if (isNaN(userAge)) {
    alert("Введено некоректне значення. Будь ласка, введіть число.");
} else {
  
    if (userAge < 18) {
     
        alert("Вам заборонено вхід");
    } else if (userAge <= 65) {
    
        alert("Ласкаво просимо!");
    } else {
     
        alert("Будь ласка, будьте обережні!");
    }
}