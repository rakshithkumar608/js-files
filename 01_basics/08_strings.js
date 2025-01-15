const name = "rakshith"
const repoCount = 7

// console.log(name + repoCount + " Value ");

console.log('hello my name is ${name} and my repo count is ${repoCount}');


const gameName = new String('rAksHi-th')
const r = 5;

console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(r));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rakshith    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rakshith.com/rakshi%20kumar"

url.replace('%20', '-')

console.log(url.replace('%20', '-'))

console.log(url.includes('rakshith'))

console.log(gameName.split('-'));














