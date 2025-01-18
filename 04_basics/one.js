/// if

// const isUserloggedIn = true 
// const temperature = 41

// if ( temperature  === 40){
//     console.log("less than 50");
// }
// else {

// console.log("temparature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==


///// scope

// const score = 200

// if(score > 100){
//       let power = "fly";
//      console.log(`User power: ${power}`);
// }
// try{
// console.log(`User power: ${power}`);
// } catch (error){
//     console.log("Error:", error.message);    
// }


// const balance = 1000

// if(balance > 500) console.log("test");

// console.log("test2")


// if (balance < 500){
//     console.log("less than");
// }

// else if(balance < 750){
//     console.log("less than 750");
    
// }

// else {
//     console.log("less than 1200");
    
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==3) {
console.log("Allow to buy course");

}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}