const email = document.getElementById('email')
const password = document.getElementById('password')
const btnSubmit = document.getElementById('btnSubmit')
const form = document.getElementById('form')

form.addEventListener('submit', function(e){
e.preventDefault()
let userEmail = email.value
let userPassword = password.value

console.log(userEmail, userPassword, 'keepvalues')

localStorage.setItem('userEmail')
localStorage.setItem('userPassword')

if(email === userEmail && password === userPassword)

{  alert('Please Log In')
    window,location.href='../../index.html'
}
else{
    alert('Please Register')
}

})
