const user = {
    username: "hitesh",
    price: 999,

     welcomeMessage: function(){
      
         console.log('${username} , welcome to website') ;
// console.log(this);

     }

}

//   user.welcomeMessage()
//  user.username = "rakshith"
// user.welcomeMessage()

// function chai (){
//     let username = "rakshith"
//     console.log(username);
    
// }
// chai()

const  chai = () => {
    let username = "rakshith"
     console.log(this);
    
 }
// chai()

// const addTwo = (num1, num2) => num1 + num2
    
const addTwo = (num1, num2) => ({username: 'hitesh'})
    


console.log(addTwo(3, 4));




