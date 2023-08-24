//way-1 bangla system
const arr1 = [2, 4, 6, 8, 10];
const dubbledArr1 = [];
for (const n of arr1) {
    const d = n * 2;
    dubbledArr1.push(d);
};
console.log(dubbledArr1);
//way-2 with normal function
function makeD(n2) {
    return n2 * 2;
};
const arr2 = [2, 4, 6, 8, 10];
const dubbledArr2 = [];
function getdubble(arr2) {
    for (const n2 of arr2) {
        const d2 = makeD(n2);
        dubbledArr2.push(d2);
    };
    return dubbledArr2;
};
const result1 = getdubble(arr2);
console.log(result1);

//way-3 best and update system with map
const numbers = [2, 4, 6, 8, 10];
//const makeDubble = number => number * 2;
//const getdubbleValue = numbers.map(makeDubble);
//or direct way
const getdubbleValue = numbers.map(number => number * 2);
console.log(getdubbleValue);

//others operation
const myArray = [15, 45, 65, 85];
const divided = myArray.map(n => n / 2);
console.log(divided);

const thirdDivided = myArray.map(n => n / 3);
console.log(thirdDivided);

const names = ['Sajal', 'Akashi', 'Chumki', 'Samiha'];
const firstLetter = names.map(name => name[0]);
console.log(firstLetter);

const addPreText = names.map(addTex => addTex + ' Hossain');
console.log(addPreText);

const getLength = names.map(name => name.length);
console.log(getLength);

const dubbleValue = getLength.map(n => n * 2);
console.log(dubbleValue);



const products = [

    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'Phone', price: 45000 },
    { id: 3, name: 'Lablat', price: 35000 },
    { id: 4, name: 'box', price: 25000 }

];
const productsName = products.map(name => name.name);
console.log(productsName);
const nameLength = productsName.map(l => l.length);
console.log(nameLength);
const productsPrice = products.map(price => price.price);
console.log(productsPrice);
let sum = 0;
for (const price of productsPrice) {
    sum += price;
}
console.log(sum);

