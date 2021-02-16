let userInfo = document.querySelector('#user_info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let user = localStorage.getItem('username');
let logoutBtn = document.querySelector('#logout');

if(localStorage.getItem('username')) {
    links.remove();
    userInfo.style.display = 'flex';
    userDom.innerHTML =  `Hi ${user.charAt(0).toUpperCase() + user.slice(1)}`;
}

logoutBtn.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = 'login.html';
    });
});

