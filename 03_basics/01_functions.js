
// function sayMyName(){

// console.log("R");
// console.log("A");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("H");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
// return result
//   return number1  + number2  
    
// }

// const result = addTwoNumbers(3, "r")

// console.log("Result: ", result);

// function loginUserMessage(username = "rakshith"){

//     if(!username ){
//         console.log("Please enter the username");
//         return
//     }
    
//     return '${username} just logged in'
//  }

// console.log(loginUserMessage("rakshith"));

// console.log(loginUserMessage("hitesh"))


function calculateCartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartprice(200, 400, 600, 5000));

const user = {
    username : "rakshith",
    prices : 200
}

function handleObject(anyobject){
    console.log('username is ${anyobject.username} and prices is $ {anyobject.prices}');
    
}

handleObject({
    username: "hitesh",
    price: 400
})
    
const myNewArray = [200, 400, 199, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 199, 6000]));

