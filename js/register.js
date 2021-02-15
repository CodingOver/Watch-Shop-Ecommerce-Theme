// Register User

let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let register_btn = document.querySelector('#sign_up');

register_btn.addEventListener('click', register);

function register(e) {
    if(username.value === "" || email.value === "" || password === "") {
        alert('PLease Enter All Your Field')
    } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);

        // redirect to home page
        setTimeout(() => {
            window.location = "login.html";
        }, 300);
    }
    e.preventDefault();
}