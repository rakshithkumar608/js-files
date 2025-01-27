 const express = require('express');
const app = express();

app.use(express.static('__dirname')); 
app.listen(3000, () => console.log('Server running on https://localhost:3000'));
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
          
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
});
});

