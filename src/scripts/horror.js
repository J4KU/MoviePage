const logOut = document.getElementById('logOut')

logOut.addEventListener('click', function (){
    localStorage.clear()

    window.location.href ='../../index.html'


})