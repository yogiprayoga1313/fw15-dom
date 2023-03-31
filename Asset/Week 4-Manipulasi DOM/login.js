const formLogin = document.getElementById('login')
console.log(formLogin)
formLogin.addEventListener('submit', function(event){
    event.preventDefault();

    const fullNameLogin = document.getElementById('fullname').value
    const emailLogin = document.getElementById('email').value
    const passwordLogin = document.getElementById('password').value
    const alertLogin = document.getElementById('alert')
    console.log(fullNameLogin)
    if(fullNameLogin === 'user' && emailLogin === 'user@gmail.com' && passwordLogin === '1234'){
        // alert('Login Succes!')
        window.location = '/index.html'
    }else {
        alert('Inccorect email or password!')
    }

})
