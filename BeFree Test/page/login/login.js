document.getElementById("come").addEventListener('click',()=>{
    var passwordInput = document.getElementById('password');
    let come = document.getElementById("come")
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        come.src = "hedden eye.svg"

    } else {
        passwordInput.type = 'password';
        come.src = "Component 6.svg"
    }
}) 
    

