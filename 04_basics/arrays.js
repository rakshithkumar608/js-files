// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value) ;
} 


///////////////////////////////////////////

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
 
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(programming[key]);
    
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('Fr', "France")

// for (const key in map){
//     console.log(key);
    
// }

/////////////////////////////

const coading = ["js", "ruby", 'cpp', "java", "pyton"]

// coading.forEach(  function (val){
// console.log(val);
// })

// coading.forEach ( (item) => {
//     console.log(item);
    
// })

// function printMe(item)


coading.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
    
})

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
        
    }

    {
        languageName: "java",
        languageFileName: "java"
        
    }

    {
        languageName: "python",
        languageFileName: "py"
        
    }
]

myCoading.forEach( (item) =>{
    console.log(item.languageName);
    
})