// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);
    
    
}
// for (let i = 0; i < Array.length; i++){
//     const element = array[i];
// }

//  console.log(a);
// console.log(b);
// console.log(c);


/********************scope level and mini hosting**** */

function one(){
    const username = "rakshith"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
     two()
    
}

one()

if (true) {
    const username = "rakshith"
    if (username === "rakshith") {
        const website = "youtube"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++interesting+++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)
