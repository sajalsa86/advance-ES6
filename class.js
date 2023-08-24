// real name : syntactic sugar
class Instructor {
    realName;
    designation = "Remitance Officer";
    team = 'It Sector';
    location;
    country;
    constructor(getName, getLocation, country) {
        this.realName = getName;
        this.location = getLocation;
        this.country = country;
    };
    startSupportSession(time) {
        console.log(`Start the Support Session at ${time}`);
    };
    createQuiz(module) {
        console.log(`Please create a quiz for module ${module}`);
    }
};

const sajal = new Instructor('Sajal', 'Naogaon');
console.log(sajal);
sajal.startSupportSession('9:00 AM');
sajal.createQuiz(10);


const akashi = new Instructor('Akashi', 'Malshon', 'Bangladesh');
console.log(akashi);
akashi.startSupportSession('11:00 am');
akashi.createQuiz(12);