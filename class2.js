
//syntactic sugar
class Instructor {
    name;
    class = "Five";
    school = "Soguna Sorkari Prathimic Biddaloy";
    roll;
    reg;
    constructor(name1, roll1, reg1) {
        this.name = name1;
        this.roll = roll1;
        this.reg = reg1;
    };
    holyDay(holly) {
        console.log(`${holly} is Holly day so don't come in school today`);
    };
    needDress() {
        console.log('Regular have ware dress to go in school');
    }
};

const samiha = new Instructor('Samiha', '01', '2552');
console.log(samiha);
samiha.holyDay('Sunday ');
samiha.needDress();

const sajeed = new Instructor('Sajeed', '02', '2525');
console.log(sajeed);
sajeed.holyDay('Monday');
sajeed.needDress();