const logOut = document.getElementById('logOut')

logOut.addEventListener('click', function (){
    localStorage.clear()

    window.location.href ='../../index.html'


})

const user1 = document.getElementById('user1')
user1.innerText = localStorage.getItem('nameUser')