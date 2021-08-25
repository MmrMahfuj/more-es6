const numbers = [4, 5, 6, 7, 8, 20, 365, 566, 34, 67, 7];
const bigNumbers = numbers.filter(Number => Number > 20);
// console.log(bigNumbers);



const produnct = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 12350, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 80, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' },
];

const blacks = produnct.filter(produnct => produnct.color == 'black');

const whiteItem = produnct.find(produnct => produnct.color == 'pink');
console.log(whiteItem);