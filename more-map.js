const friend = ['laizo khatun', 'momotaz begom', 'rohim mollah'];
const friendName = friend.map(friend => friend.length);
// console.log(friendName);


const produnct = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 12350, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 80, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' },
];
const productName = produnct.map(produnct => produnct.name);
const productPrice = produnct.map(produnct => produnct.price);
// produnct.map(produnct => console.log(produnct));
produnct.forEach(produnct => console.log(produnct));
// console.log(productName, productPrice);