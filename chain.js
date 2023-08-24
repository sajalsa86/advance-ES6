const users = ['Sajal', 70, { subject: 'computer', roll: 521299, reg: 492249 }];
console.log(users[2].roll);

const info = {

    village: 'Dighirpar',
    post: 'Palsha',
    phone: [5456, 54555, 65744],
    address: { road: 'kaligonj road', para: 'mosjid para', homeNo: 546 },
};
console.log(info.address.para);

const details = {
    pohone: '+880' + 1746233086,
    numbers: [21, 65, 4, 9, 8, 75],
    info: {
        village: 'Dighirpar',
        post: 'Palsha',
        address: {
            road: 'kaligonj road',
            para: 'mosjid para',
            homeNo: 546,
            waif: {
                Name: 'akashi',
                age: 20,
                famely: ['chumki', 'bakkar', { a: 'sathi,', b: 'ayesha' }]

            }
        },
        moreInfo: [{ Firstname: 'sajal', LastName: 'Hossain' }]
    },
    more: 'more data'
};
const result5 = details.info?.address?.waif.famely[2].b;
console.log(result5)