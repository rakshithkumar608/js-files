const user = {
    username: "rakshith",
    price: 999,

    welcomeMessage: function(){
        console.log('${this.username}, welcome to website');
        
    }
}

user.welcomeMessage()
user.username = "hithesh"
user.welcomeMessage()