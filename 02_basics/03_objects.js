// singleton
// Object.create

// object literals
const mysym = Symbol("key1")

let user={
    name: "vivek",
    age: 21,
    "full name": "vivek pathak" ,
    [mysym]:"myfirstkey",  //symbol object
    location:"Raipur",
    email: "vivekpathak890@gmail.com",
    isloggedin : false,
    lastlogindays : ["friday","tuesday"]

}

// console.log(user.age);
// console.log(user[mysym]);
// console.log(user["full name"]);
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["lastlogindays"]);

// user.email = "vivek@smart.com"
// Object.freeze(user)
// user.email = "vivek@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello user");
}
user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
    //console.log("Hello user," +this.name);
}

console.log(user.greeting());
console.log(user.greetingTwo());
// console.log(`string text line 1
// string text line 2`);
// backticks character