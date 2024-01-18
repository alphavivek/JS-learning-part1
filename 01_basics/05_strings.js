const name = "vivek"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not use this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // use this line instant of above line.

const gameName = new String('vivek-vc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   vivek    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vivek.com/vivek%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('vivek'))

console.log(gameName.split('-'));