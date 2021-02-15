let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginBtn = document.querySelector('#sign_in');

let getUser = localStorage.getItem('username');
let getPassword = localStorage.getItem('password');

loginBtn.addEventListener('click', login);


function login(e) {
    if(username.value === "" || password === "") {
        alert('PLease Enter All Your Field')
    } else {
        if (
            getUser && 
            getUser.trim() === username.value.trim() && 
            getPassword && 
            getPassword === password.value
        ) {
            setTimeout(() => {
                window.location = "index.html"
            }, 300);
        } else {
            alert('Wrong Please Create an account');

        }
    }
    e.preventDefault();
}