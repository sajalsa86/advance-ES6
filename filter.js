const numbers = [70, 3, 98, 54, 2, 140, 50, 62, 25, 5, 120, 85, 1, 35, 150];
const bigest = numbers.filter(n => n > 100);
console.log(bigest);

const lowest = numbers.filter(n => n < 20);
console.log(lowest);

const arr1 = [2, 5, 4, 9, 6, 11, 8, 13, 10];
const even = arr1.filter(n => n % 2 === 0);
console.log(even);

const products = [

    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'Phone Iphone', price: 45000 },
    { id: 3, name: 'Lablat computer', price: 35000 },
    { id: 4, name: 'box', price: 25000 }

];

const highestPrice = products.filter(n => n.price > 30000);
console.log(highestPrice);

const lowestPrice = products.filter(n => n.price < 30000);
console.log(lowestPrice);

