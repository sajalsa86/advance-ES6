const students = {
    name: 'Sajal Hossain',
    collage: 'Naogaon Polytechnic',
    roll: 521299,
    marks: {
        math: 95,
        physics: 75,
        chemistry: 70
    },
    likes: ['Facebook', 'Youtube', 'News', { program1: 'HTML', program2: 'css' }]
};
const getName = students.name;
console.log(getName);

const getAllMarks = students.marks;
console.log(getAllMarks);

const getMathNumber = students.marks.math;
console.log(getMathNumber);

const getPhysics = students['marks']['physics'];
console.log(getPhysics);

const getLikes = students.likes;
console.log(getLikes);

const getLang = students.likes[3].program2;
console.log(getLang);
