const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
//use backticks for string interpolation or concatenation

const gameName = new String('hitesh-hc-com') // creates an object
console.log(gameName + typeof(gameName));


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// let myName = "Tanushree"
// console.log(myName);
// console.log(myName.slice(1,3));
// console.log(myName.slice(3));
// console.log(myName.slice(-9,10));

