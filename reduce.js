
const numbers = [2, 4, 6, 8, 10];

const total = numbers.reduce((previus, sum) => previus + sum, 0);
console.log(total);

const names = ['Sajal ', 'Hossain'];

const fullName = names.reduce((F, L) => F + L);
console.log(fullName);