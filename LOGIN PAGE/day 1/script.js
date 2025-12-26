// //-------------------- SIGN UP VALIDATION --------------------
// function signupUser() {
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let pass = document.getElementById("password").value.trim();

//     if (name === "") {
//         alert("Please enter your Name");
//         return;
//     }
//     if (email === "") {
//         alert("Please enter your Email");
//         return;
//     }
//     if (pass === "") {
//         alert("Please enter your Password");
//         return;
//     }

//     localStorage.setItem("userName", name);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPass", pass);

//     alert("Account Created Successfully!");
//     window.location.href = "index.html";
// }
function signupUser() {

    // Check if user already signed up
    if (localStorage.getItem("userEmail")) {
        alert("You already have an account! Please Sign In.");
        window.location.href = "index.html";
        return;
    }

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (name === "") {
        alert("Please enter your Name");
        return;
    }
    if (email === "") {
        alert("Please enter your Email");
        return;
    }
    if (pass === "") {
        alert("Please enter your Password");
        return;
    }

    // Save user data
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

//-------------------- SIGN IN VALIDATION --------------------
function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPassword").value.trim();
    
    if (email === "") {
        alert("Please enter your Email");
        return;
    }
    if (pass === "") {
        alert("Please enter your Password");
        return;
    }

    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPass");

    if (email === savedEmail && pass === savedPass) {
        window.location.href = "home.html";
    } else {
        alert("Incorrect Email or Password!");
    }
}

//-------------------- FORGOT PASSWORD VALIDATION --------------------
function resetPassword() {
    let email = document.getElementById("forgotEmail").value.trim();

    if (email === "") {
        alert("Please enter your Email");
        return;
    }

    if (email === localStorage.getItem("userEmail")) {
        alert("Your Password is: " + localStorage.getItem("userPass"));
        window.location.href = "index.html";
    } else {
        alert("Email not found!");
    }
}

//-------------------- AUTO REDIRECT --------------------
function checkSignup() {
    const user = localStorage.getItem("userEmail");
    if (user) {
        window.location.href = "index.html"; // already registered
    } else {
        window.location.href = "signup.html"; // no signup done
    }
}
