const formSignUp = document.getElementById('signup')
const fullNameSingUp = document.getElementById('fullname')
const emailSignUp = document.getElementById('email')
const passwordSignUp = document.getElementById('password')
const confirmSingUp = document.getElementById('confirm')
const alertSignUp = document.getElementById('alert')
const alertFullname = document.getElementById('alertfullname')
const alertEmail = document.getElementById('alertemail')
const alertPassword = document.getElementById('alertpassword')
const alertConfirm = document.getElementById('alertconfirm')


formSignUp.addEventListener('submit', function (event) {
    event.preventDefault();

    // console.log(fullNameSingUp)
    if (!fullNameSingUp.value) {
        // console.log(emailSignUp, 'masuk email signup')
        alertFullname.innerText = 'Name field cannot be empty'
    } else {
        alertFullname.innerText = ''
    }
    if (!emailSignUp.value) {
        // console.log(emailSignUp, 'masuk email signup')
        alertEmail.innerText = 'Email field cannot be empty'
    } else {
        alertEmail.innerText = ''
    }
    if (!passwordSignUp.value) {
        alertPassword.innerText = 'Password field cannot be empty'
    } else {
        alertPassword.innerText = ''
    }
    if (!confirmSingUp.value) {
        alertConfirm.innerText = 'Password field cannot be empty'
    } else {
        alertConfirm.innerText = ''
    }
    if (fullNameSingUp.value === 'User' && emailSignUp.value === 'user@gmail.com' && passwordSignUp.value === 'qwerty123' && confirmSingUp.value === 'qwerty123') {
        alertSignUp.innerText = ''
        window.location = '/Signin-Page-v1-2.html'
    
    }
    else {
        // alertSignUp.innerText = 'Please enter the data correctly!'
        checkbox.checked = false;
        button.disabled = true;
        button.style.backgroundColor = '#748da683'
    }

})
// formSignUp.addEventListener("input", function (event) {
//     if (formSignUp.value.trim() !== "") {
//         alertSignUp.textContent = "";
//     }
// });
fullNameSingUp.addEventListener("input", function (event) {
    if (fullNameSingUp.value.trim() !== "") {
        alertFullname.textContent = "";
    }
});
emailSignUp.addEventListener("input", function (event) {
    if (emailSignUp.value.trim() !== "") {
        alertEmail.textContent = "";
    }
});
passwordSignUp.addEventListener("input", function (event) {
    console.log(event)
    if (passwordSignUp.value.trim() === "") {
        // console.log(passwordSignUp, 'masuk 1')
        alertPassword.textContent = "Password must be filled";
    } else if (passwordSignUp.value.trim().length < 8) {
        // console.log(passwordSignUp, 'masuk 2')
        alertPassword.textContent = "Password must be at least 8 characters";
    }
    else {
        // console.log(passwordSignUp, 'masuk 3')
        alertPassword.textContent = "";
    }
});
confirmSingUp.addEventListener("input", function (event) {
    console.log(event)
    if (confirmSingUp.value.trim() === "") {
        // console.log(confirmSingUp, 'masuk 1')
        alertConfirm.textContent = "";
    }else if (confirmSingUp.value.trim() != passwordSignUp.value.trim()) {
        // console.log(passwordSignUp, 'masuk 2')
        alertConfirm.textContent = "Password must match";
    }
    else {
        // console.log(passwordSignUp, 'masuk 3')
        alertConfirm.textContent = "";
    }
});

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

