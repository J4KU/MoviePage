const email = document.getElementById('email')
const password = document.getElementById('password')
const btnSubmit = document.getElementById('btnSubmit')
const form = document.getElementById('form')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let userEmail = email.value
    let userPassword = password.value

    console.log(userEmail, userPassword, 'keepvalues')
    let emailSaved = localStorage.getItem('userEmail')
    let passwordSaved = localStorage.getItem('userPassword')


    if (emailSaved === userEmail && passwordSaved === userPassword) {
        alert('WELCOME')
        window.location.href = ('./src/pages/home.html')
    }
    else {
        alert('Please Register')
        window.location.href = ('./src/pages/register.html')
    }

})

