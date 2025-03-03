 
const users = [
  { name: 'Олександр', age: 25 },
  { name: 'Марія', age: 17 },
  { name: 'Олег', age: 19 },
  { name: 'Ірина', age: 22 }
];

 
const adultUsers = users.filter(user => user.age > 18);
console.log(adultUsers);

 
const userNames = users.map(user => user.name);
console.log(userNames);

 
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge);


console.log("Користувачі старше 18 років:", adultUsers);
console.log("Імена користувачів:", userNames);
console.log("Середній вік користувачів:", averageAge);