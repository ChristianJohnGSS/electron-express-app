
const axios = require('axios');
const { remote } = require('electron');

const STATUS_OK = 200;
const loginButton = document.getElementById('login');

loginButton.addEventListener("click", () => {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username && !password) {
        alert("Please enter your login credentials!");
        return false;
    }

    axios.post('http://localhost:5000/login', {
        username,
        password
    })
    .then((response) => {
        console.log(response)
        if (response.status == STATUS_OK) {
            // Load another page on current window
            remote.getCurrentWindow().loadURL('file://' + __dirname + '/pages/create-users.html');
        }
    })
    .catch((err) => {
        console.log(err);
    })

});