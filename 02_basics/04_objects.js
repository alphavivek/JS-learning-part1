// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "111aaa"
tinderUser.name = "vikyy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "userr1@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vivek",
            lastname: "pathak"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hot@gmail.com"
    },
    {
        id: 1,
        email: "hate@gmail.com"
    },
    {
        id: 1,
        email: "hall@gmail.com"
    },
]

users[1].email
// console.log(users[2].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));