const names = ['Sajal', 'Akashi', 'Chumki', 'Samiha'];

names.forEach(element => {
    const getLength = (element.length);
    console.log(getLength);
});

const products = [

    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'Phone', price: 45000 },
    { id: 3, name: 'Lablat', price: 35000 },
    { id: 4, name: 'box', price: 25000 }

];

products.forEach(product => {
    const getPrice = product.price;
    console.log(getPrice);
});



