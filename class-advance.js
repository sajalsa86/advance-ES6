class comon {
    name;
    class1;
    room;
    constructor(name, class1, room) {
        this.name = name;
        this.class1 = class1;
        this.room = room;
    };
    schoolName = 'Soguna Sorkari Prathomic biddaloy';
    place = 'Dighirpar atrai naogaon';
    hollyDay(friday, sutarday) {
        console.log(`${friday} and ${sutarday} is regular holly day for all`);
    }
};
class classOne extends comon {
    welcome = 'Welcome Class one student';
    constructor(name, class1, room) {
        super(name, class1, room)
    };
    extraClass(monday) {
        console.log(`${monday} is fixed for extra class for only Class ${this.class1}`);
    }
};

class classTwo extends comon {
    welcome = 'Welcome Class Two student';
    type;
    constructor(name, class1, room, type) {
        super(name, class1, room)
        this.type = type;
    };
    extraClass(Sunday) {
        console.log(`${Sunday} is fixed for extra class for only Class ${this.class1}`);
    }
};

const samiha = new classOne('Samiha', 'One', 1);
console.log(samiha);
samiha.hollyDay('friday', 'sutarday');
samiha.extraClass('Monday');

const Safone = new classTwo('Safone', 'Two', 2, 'English Medium');
console.log(Safone);
Safone.hollyDay('friday', 'sutarday');
Safone.extraClass('Sunday');