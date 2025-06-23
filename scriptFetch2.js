// fetching login page

function goToLogin() {
    window.location.href = "login.html";
}


function goToSignUp() {
    window.location.href = "signup.html";
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded",()=>{

    const loginform = document.querySelector(".login-form")

    loginform.addEventListener("submit", async (e) =>{
        e.preventDefault()
        const username = document.querySelector(".username-box").value.trim()
        const password = document.querySelector(".password-box").value
        
        const response = await fetch("http://localhost:3100/api/v1/user/signin",{
            method : "POST" , 
            headers: {
                "Content-Type": "application/json"
              },
              body : JSON.stringify({username,password})
        }
        )
        if (response.ok) {
            goToDashboard();
            loginform.reset();
          } else {
            alert("Signup failed");
          }
        console.log(response);
        
    })  

    

})