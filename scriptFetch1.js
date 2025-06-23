
function goToLogin() {
    window.location.href = "login.html";
}



function goToSignUp() {
    window.location.href = "signup.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const signupform = document.querySelector(".signupform");
  
    signupform.addEventListener("submit", async (e) => {
      e.preventDefault(); 
  
      const username = document.querySelector(".username-box").value.trim()
      const email = document.querySelector(".email-box").value.trim()
      const password = document.querySelector(".password-box").value
      
      
      if (!username || !email || !password) {
        alert("Please fill all fields!");
        return;
      }

      document.querySelector(".username-box").innerHTML = ""
    document.querySelector(".email-box").innerHTML = ""
    document.querySelector(".password-box").innerHTML = ""
      
      const response =  await fetch("http://localhost:3100/api/v1/user/signup",{
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({username,email,password})
      })
      if (response.ok) {
        signupform.reset();
      } else {
        alert("Signup failed");
      }
      console.log(response.ok);
    });

    


  });
  
  