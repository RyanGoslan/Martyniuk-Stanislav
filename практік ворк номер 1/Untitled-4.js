
const capitals = {
    "україна": "київ",
    "польща": "варшава",
    "німеччина": "берлін",
    "франція": "париж",
    "великобританія": "лондон",
    "сша": "вашингтон",
    "італія": "рим",
    "іспанія": "мадрид",
    "канада": "оттава",
    "японія": "токіо",
    "китай": "пекін"
};


function getUserData() {

    const name = prompt("Введіть ваше ім'я:");
    const birthYearStr = prompt("Введіть рік вашого народження:");
    const city = prompt("Введіть місто, в якому ви проживаєте:");
    
 
    const birthYear = parseInt(birthYearStr);
    
 
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        console.log("Будь ласка, введіть коректний рік народження.");
        return null;
    }
    

    console.log(`\nІнформація про користувача:`);
    console.log(`Ім'я: ${name}`);
    console.log(`Рік народження: ${birthYear}`);
    console.log(`Місто проживання: ${city}`);
    

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    console.log(`Ваш вік: ${age} років`);
    
 
    let ageGroup;
    if (age < 12) {
        ageGroup = "дитина";
    } else if (age < 18) {
        ageGroup = "підліток";
    } else if (age < 60) {
        ageGroup = "дорослий";
    } else {
        ageGroup = "літня людина";
    }
    
    console.log(`Ви належите до вікової групи: ${ageGroup}`);
    

    const normalizedCity = city.toLowerCase().trim();
    const isCapital = Object.values(capitals).includes(normalizedCity);
    
    if (isCapital) {
      
        let country = "";
        for (const [key, value] of Object.entries(capitals)) {
            if (value === normalizedCity) {
                country = key;
                break;
            }
        }
        console.log(`${city} є столицею країни: ${country.charAt(0).toUpperCase() + country.slice(1)}`);
    } else {
        console.log(`${city} не є столицею жодної з відомих нам країн.`);
    }
    
    return { name, birthYear, city, age, ageGroup, isCapital };
}


const userData = getUserData();