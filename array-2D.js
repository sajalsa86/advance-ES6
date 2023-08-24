const MathScore1 = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
console.log(MathScore1[0][3]);
console.log(MathScore1[4][3]);

const lastElement = (MathScore1[MathScore1.length - 1][(MathScore1[MathScore1.length - 1]).length - 1]); // returns 'B'
console.log(lastElement);

//How to sum all elements of a 2D array
let numberArr = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
];

let getTotal = 0;
numberArr.forEach((row) => {
    row.forEach((element) => {
        getTotal += element;
    })
});
console.log(`The sum of all elements in the array is: + ${getTotal}`);

//How to Manipulate 2D Arrays in JavaScript

//How to insert an element into a 2D array
const MathScore2 = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
//add row
MathScore2.push(["Tom Right", 30, 32, "B"]);

MathScore2.unshift(["Alice George", 28, 62, "A"]);
console.log(MathScore2);
// add row by set position
MathScore2.splice(5, 0, ["Sajal Hossain", 28, 62, "A"]);
console.log(MathScore2);

//add element
//example-1
MathScore2.forEach((score) => {
    const newElement = 10;
    score.push(newElement);
});
console.log(MathScore2);
//example-2
MathScore2.forEach((score) => {
    const sumElement = score[1] + score[2];
    score.unshift(sumElement);
});
console.log(MathScore2);
//How to remove an element from a 2D array
MathScore2.pop();
MathScore2.shift();

console.log(MathScore2);
//You can also remove elements from each array element:
MathScore2.forEach((score) => {
    score.pop();
});

console.log(MathScore2);

//the splice() method to remove array elements

MathScore2.splice(2, 1);
console.log(MathScore2);

//exam-1
let data =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ];
const result1 = data[3].pHeroCourses["course-xyz"];
console.log(result1);

const result2 = data[3].locationField["en-US"]["lon"];
console.log(result2);

//exam-2
const playersInfo = [
    ['Sajal Hossain', 45],
    ['Akashi Akther', 90],
    ['Samiha Khatun', 75],
    ['Safone Hossain', 40]
];

const highestScorer = playersInfo => {
    let highestScore = 0;
    let highestScorerName = '';

    playersInfo.forEach(player => {
        if (player[1] > highestScore) {
            highestScore = player[1];
            highestScorerName = player[0];
        }
    });

    return highestScorerName;
};

const highestScorerName = highestScorer(playersInfo);
console.log(`The highest scorer is: ${highestScorerName}`);


let numberArr2 = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
];

const getMaxValue = arr => Math.max(...arr.flat());

const highestValue = getMaxValue(numberArr2);
console.log(highestValue); // This will output the highest value: 60
