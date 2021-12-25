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