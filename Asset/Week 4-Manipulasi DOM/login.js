const fullNameLogin = document.getElementById('fullname')
const emailLogin = document.getElementById('email')
const passwordLogin = document.getElementById('password')
const alertFullname = document.getElementById('alertfullname')
const alertEmail = document.getElementById('alertemail')
const alertPassword = document.getElementById('alertpassword')
const alertLogin = document.getElementById('alert')
// console.log(fullNameLogin)

const formLogin = document.getElementById('login')
console.log(formLogin)
formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!fullNameLogin.value) {
        // console.log(emailSignUp, 'masuk email signup')
        alertFullname.innerText = 'Name field cannot be empty'
    } else {
       alertFullname.innerText = ''
    }
    if (!emailLogin.value) {
        // console.log(emailSignUp, 'masuk email signup')
        alertEmail.innerText = 'Email field cannot be empty'
    } else {
        alertEmail.innerText = ''
    }
    if (!passwordLogin.value) {
        alertPassword.innerText = 'Password field cannot be empty'
    } else {
        alertPassword.innerText != 'Inccorect Password!'
    }
    if (fullNameLogin.value === 'User' && emailLogin.value === 'user@gmail.com' && passwordLogin.value === 'qwerty123') {
        // alert('Login Succes!')
        window.location = '/indexLogin.html'
        alertLogin.innerText = ''
    } else {
        // alertLogin.innerText = 'Inccorect Fullname, email or password!'
        // alert('Inccorect email or password!')
    }

})
fullNameLogin.addEventListener("input", function (event) {
    if (fullNameLogin.value.trim() !== "") {
        alertFullname.textContent = "";
    }
});
emailLogin.addEventListener("input", function (event) {
    if (emailLogin.value.trim() !== "") {
        alertEmail.textContent = "";
    }
});
passwordLogin.addEventListener("input", function (event) {
    console.log(event)
    if (passwordLogin.value.trim() === "") {
        // console.log(passwordSignUp, 'masuk 1')
        alertPassword.textContent = "Password harus diisi";
    } else if (passwordLogin.value.trim().length < 8) {
        // console.log(passwordSignUp, 'masuk 2')
        alertPassword.textContent = "Password must be at least 8 characters";
    }
    else {
        // console.log(passwordSignUp, 'masuk 3')
        alertPassword.textContent = "";
    }
});    
