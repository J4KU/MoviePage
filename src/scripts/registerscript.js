const email = document.getElementById('email')
const password = document.getElementById('password')
const btnSubmit = document.getElementById('btnSubmit')
const form = document.getElementById('form')
const nameUser = document.getElementById('nameUser')



form.addEventListener('submit', function (e) {
    e.preventDefault()
    let userEmail = email.value
    let userPassword = password.value
    let user = nameUser.value

    console.log(userEmail, userPassword, user, 'keepvalues')

    localStorage.setItem('userEmail', userEmail)
    localStorage.setItem('userPassword', userPassword)
    localStorage.setItem('nameUser', user)

    alert('Your Registration Was Sucessful')
    window.location.href = '../../index.html'

})
    