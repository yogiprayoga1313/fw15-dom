const formSignUp = document.getElementById('signup')
formSignUp.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullNameSingUp = document.getElementById('fullname').value
    const emailSignUp = document.getElementById('email').value
    const passwordSignUp = document.getElementById('password').value
    const confirmSingUp = document.getElementById('confirm').value
    const alertSignUp = document.getElementById('alert')
    // console.log(fullNameSingUp)
    if (fullNameSingUp === 'user' && emailSignUp === 'user@gmail.com' && passwordSignUp === '1234' && confirmSingUp === '1234') {
        alertSignUp.innerText = ''
        alert('Sign-Up Succes!')
        window.location = '/index.html'
    } else {
        alertSignUp.innerText = 'Incorrect email or password!'
        checkbox.checked = false;
        button.disabled = true;
        button.style.backgroundColor = '#748da683'
    }

})


const checkbox = document.getElementById('checkboxsignin');
const button = document.getElementById('buttonsignin');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        button.disabled = false;
        button.style.backgroundColor = '#748DA6'
    } else {
        button.disabled = true;
        button.style.backgroundColor = '#748da683'
    }
});

