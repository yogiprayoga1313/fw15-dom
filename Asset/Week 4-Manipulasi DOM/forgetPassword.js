const formForgetPassword = document.getElementById('forgetpassword')
const emailForget = document.getElementById('email')
const alertForget = document.getElementById('alert')

formForgetPassword.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailForget.value) {
        // console.log(emailSignUp, 'masuk email signup')
        alertForget.innerText = 'Email field cannot be empty'
    } else {
        alertForget.innerText = ''
    }
    if (emailForget.value === 'user@gmail.com'){
        window.location = '/indexLogin.html'
    }else {
        // alertForget.innerText !== 'Email not found!'
    }
})
