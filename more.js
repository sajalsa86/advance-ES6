//importan 
// what is prototypical inheritance

const numbers = [1, 3, 5, 7, 9];
const evenArray = numbers.map(num => num + 1);
console.log(evenArray);

const oddArray = evenArray.map(num => num - 1);
console.log(oddArray);

const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const dividedByTen = numbers2.filter(num => num % 10 === 0);
console.log(dividedByTen);

const getFirstValue = numbers2.find(num => num % 10 === 0);
console.log(getFirstValue);

const addedArr = [1, 9, 17, 22];
const getArraySum = addedArr.reduce((previus, current) => previus + current, 0)
console.log(getArraySum);
//for loop
let getTotal = 0;
for (const number of addedArr) {
    getTotal += number;
}
console.log(getTotal);

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Sumi', age: 22 }
];

// Using a for loop:
let totalAge = 0;
for (const person of people) {
    totalAge += person.age;
}
console.log(totalAge);

//Using the reduce method:

const getTotalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log(getTotalAge);

const students = {
    name: 'Sajal',
    age: 28
};
const SajalAge = students.age;
console.log(SajalAge);

const data = {
    location: [
        {
            name: 'Sajal Hossain',
            contact: '01746233086',
            city: 'Atrai Naogaon',
            country: 'Bangladesh'
        },
        'Sajal'
    ],
    other: 'info'
};
const cityOfSajal = data.location[0].city;
console.log(cityOfSajal);

const user = {
    id: 1,
    name: 'Sajal Hossain',
    userName: 'sajalsa',
    email: 'sajalsm86@gmail.com',
    address: {
        street: 'Atrai to kaligonj road',
        homeNo: 150,
        city: 'Atrai Naogaon',
        zipCode: 6596,
        geo: {
            lat: 'Lat-6548',
            lang: 'Lang-5475'
        }
    },
    phone: '01746233086',
    website: 'www.sajalHossain.com',
    company: {
        Name: 'Sa Foundation',
        Address: 'dighirpar atari'
    }

};
console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address?.geo?.lat);
console.log(user.company.Name);

const myVar = 'happy';

const emotion = {
    happy: 'I am a happy man',
    sad: 'I am a sad'
};

console.log(emotion.happy);// output: I am a happy man
console.log(emotion[myVar]);//output: I am a happy man

const myObject = {
    1: 'This is a one',
    2: 'This is a two'
};
console.log(myObject[1]);
//console.log(myObject.1); wrong
const yourObject = {
    'This is one': 1,
    'This is two': 2
};
console.log(yourObject['This is one']);
//console.log(yourObject.'This is one'); wrong
const getMaxFromCombain = (arr1, arr2) => {
    const combain = [...arr1, ...arr2];
    const max = Math.max(...combain);
    return max;
};
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [12, 420, 68, 88, 180];
const max = getMaxFromCombain(arr1, arr2);
console.log(max);

const friends = ['manik', 'khobirul', 'habib', 'sarour', 'alomgir', 'alamin', 'shihab'];
const evenF = friends.filter(friend => friend.length % 2 === 0);
console.log(evenF);
const getEvenF = F => F.filter(fr => fr.length % 2 === 0);
console.log(getEvenF(friends));





