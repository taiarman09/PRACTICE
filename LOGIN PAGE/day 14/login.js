let form = document.getElementById("loginForm")
form.addEventListener("submit", function (e) {
    e.preventDefault()


    
    let email=document.getElementById("email").value.trim()
    let password=document.getElementById("password").value.trim()


    if(email==="" && password===""){
        alert("please fill all details")
        return;
    }
    else if(email===""){
        alert("please enter your email")
        return;
    }
    else if(password===""){
        alert("please enter your password")
        return;
    }

    let users=JSON.parse(localStorage.getItem("users")) || [];
    let check=users.find(u=> u.email===email && u.password===password)

    if(check){
        alert("login succesfully!")
        window.location.href="home.html"
        return;
    }
    else{
        alert("Incorrect email and password")
    }

})