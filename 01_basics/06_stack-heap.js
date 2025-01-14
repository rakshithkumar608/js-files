// two types of memory 

// 1.stack(primitive)
//2.heap(non-primitive)

let myYoutubename = "rakshith kumar"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rakshi@google.com"

console.log(userOne.email);
console.log(userTwo.email);



