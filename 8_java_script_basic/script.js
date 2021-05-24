var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sakil",
        password: "123"
    },
    {
        username: "Tanbir",
        password: "7777"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "I never tired from learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooo coool !"
    }
];



function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;

        }
    }
    return false;
}

function signIn(user, pass) {

    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry , worng username or password");
    }

    // if (user === database[0].username && pass === database[0].password) {
    //     console.log(newsFeed);
    // }else{
    //     alert("Sorry, wrong username and password ! ");
    // }
}
var usernamePrompt = prompt("What's Your username ?");
var passwordPrompt = prompt("What's your password?");
signIn(usernamePrompt, passwordPrompt);