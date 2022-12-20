
//kullanici girsi kontrolu 
function loginUser(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var formError = document.getElementById("form-error")
   
    if(username =="" || password == ""){
        formError.innerHTML = "Please fill in the fields"
        return
    }

    if(username =="mm@mm.mm" || password == "mmmmmm"){
        alert('WELCOME USER')
    }
}

function signUpUser(){
    var username = document.getElementById("signUpUsername").value
    var email = document.getElementById("signUpEmail").value
    var password = document.getElementById("signUpPassword").value
    var rePassword = document.getElementById("signUpRePassword").value
    
    var signUpError = document.getElementById("signUpError");
    console.log("tanimlandi")
    if(username =="" || password == ""){
        signUpError.innerHTML = "Do not leave fields blank"
        console.log("Fields are empty")
    }

    var newRePasswordError = document.getElementById("newRePasswordError")
    if(password != rePassword){
        newRePasswordError.innerHTML = "Passwords are not the same"
        console.log("esit degil")
    }

    var passLength = document.getElementById("passwordLength")
    var passwordLength = String(password).length
    console.log("uzunluk alindi")
    if(passwordLength < 6){
        console.log("sifre 6 dan az")
        passLength.innerHTML = "Password cannot be less than 6 characters"
    }
}

var emailMessage = document.getElementById("mailMessage");
function sendMailToUpdatePassword(){
    emailMessage.innerHTML = "Mail sent, please check your inbox"
}

document.addEventListener("DOMContentLoaded",() =>{
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#register")
    const forgotPasswordForm = document.querySelector("#forgot")

    document.querySelector("#signUp").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.remove("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })

    document.querySelector("#newPassword").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.remove("form--hidden")
    })

    document.querySelector("#signIn").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })
    

    document.querySelector("#signUpUser").addEventListener("click", e=> {
        e.preventDefault()
        signUpUser()
    })

    document.querySelector("#backToLogin").addEventListener("click", e=> {
        e.preventDefault()
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    }) 

  
    document.querySelector("#emailToPassword").addEventListener("click", e=> {
        e.preventDefault()
        sendMailToUpdatePassword()
    })
})