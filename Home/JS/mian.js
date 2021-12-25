let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');



window.onscroll = () => {
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



formbtn.addEventListener('click', () => {
    loginform.classList.add('active');
});


formclose.addEventListener('click', () => {
    loginform.classList.remove('active');
});



function show() {
    var password = document.querySelector('[name=password]');

    if (pass.getAttribute('type') = ("password")) {
        password.setAttribute('type', 'text');
        document.getElementById('font').style.color = 'black';
    }
    else {
        password.setAttribute('type', 'password');
        document.getElementById("font").style.color = 'white';
    }
}