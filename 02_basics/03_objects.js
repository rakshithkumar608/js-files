// singleton  

// const mySym = Symbol("key1")

// object literals
// const JsUser = {
//     name: "rakshith",
//     "full name": "rakshith kumar",
//     mySym: "mykey1",
//     age :18,
//     location: "manglore",
//     email: "rwefefv@google.com",
//     isLoggedin: false,
//     lastLoginDays: ["Monday", "saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(JsUser.lastLoginDays);

// JsUser.email = "rakshith@youtube.com"
// Object.freeze(JsUser)
// JsUser.email = "rakshith@chatbot.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("hello Js User");   
// }

// console.log(JsUser.greeting());


// JsUser.greetingTwo = function(){
//     console.log('hello Js User, ${this.name}');   
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//***********objects in depth************* */

// const tinderUser = new Object()

// const tinderUser = {}
//  tinderUser.id = "123abx"
//  tinderUser.name = "safdgs"
//  tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "rakshith",
//             lastname: "kumar"
//         }
        
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

//  const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({},obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "hai@gmail.com"
//     },
//     {
//         id: 1,
//         email: "hai@gmail.com"
//     },
//     {
//         id: 1,
//         email: "hai@gmail.com"
//     },
// ]

// users[1].email
//   console.log(tinderUser);
    
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/******************************************** */


//// objects destructing and JSON API////////

const course = {
    coursename: "js tutorials",
    price: "999",
    courseInstructor: "hitesh"
}

//  couse.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "rakshith",
//   "  coursename": "js tutorials",
//     "price": "free"
// }

[
    {},
    {},
    {}

]

