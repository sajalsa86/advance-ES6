const data = {
    sajal: {
        id: 33,
        study: [
            {
                primary: [
                    { schoolName: 'soguna Primary School' },
                    { location: 'Dighirpar atrai' }
                ]
            },
            {
                secondary: [
                    { collageName: 'Shafiqpur' },
                    { location: 'Shafiqpur raninagar' }
                ]
            }
        ],
    },

};

const getiPrimaryLocation = data.sajal.study[0].primary[1].location;
//console.log(getiPrimaryLocation);

const getSecondaryLocation = data.sajal.study[1].secondary[1].location;
console.log(getSecondaryLocation);

let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {
                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
};
const getResult1 = activities.activity1[0].song_list.song_1;
console.log(getResult1);

const getResult2 = activities.activity1[1].song_list.song_2;
console.log(getResult2);

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
};
const view1 = students[2222].address.city;
console.log(view1);

const view2 = students[3333].name;
console.log(view2);


let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming ercoddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
};
const output = instructor.additionalData.books[1];
console.log(output);

const output1 = instructor.additionalData.moreDetails.hometown.state;
console.log(output1);

const output2 = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(output2);

const studentData = [
    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
];

const myResult1 = studentData[0].details[0].gradingDetails[0].grade;
console.log(myResult1)

const myResult2 = studentData[1].details[0].gradingDetails[0].grade;
console.log(myResult2)

const myResult3 = studentData[1].details[1].gradingDetails[0].grade;
console.log(myResult3);

let data1 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "habluder adda",
                category: "XYZ",
                price: "20$",
            },
            bookCategory: "Basic",
        },
        {
            bookId: 2,
            bookDetails: {
                name: "gobluder adda",
                category: "ABC",
                price: "40$",
            },
            bookCategory: "Beginner",
        }
    ],
};
const myResult4 = data1.data[0].bookDetails.name;
console.log(myResult4);

const myResult5 = data1.data[1].bookCategory;
console.log(myResult5);