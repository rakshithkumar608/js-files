// const coading = ["js", "ruby", 'cpp', "java", "pyton"]

// const values = coading.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter (  (num) => num > 4)

// const newNums = []
//  myNums.forEach(  (num) =>{
//     if (num >4){
//         newNums.push(num)
//     }
//  })

// console.log(newNums);

// ///// filter meathod /////////
// const userBooks = books.filter (  (bk) => bk.genre === 'History')
// ///let/


//  userBooks = books.filter(  (bk) => {return bk.publish >= 2000})
// console.log(userBooks);



// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map(  (num) => {return num + 10})


// const newNums = myNumbers
//                   .map( (num) => num * 10)
//                   .map( (num) => num + 1)
//                   .filter(  (num) => num >= 40)
// console.log(newNums);

// const array1 = [1, 2, 3, 4];

// // 0+1+1+3+4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,initialValue
    
// );
// console.log(sumWithInitial);
//expected output: 10

 const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoopingCart = [
   { itemName: 'js course',
    price: 3000},

    { itemName: 'python course',
        price: 2000},

        { itemName: 'js ',
            price: 6000},
         
]
const priceTopay = shoopingCart.reduce( (acc, item) => item.price,  0)

console.log(priceTopay);