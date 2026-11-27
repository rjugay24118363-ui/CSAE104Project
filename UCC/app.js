
// SPLASH SCREEN
window.addEventListener("load", function () {

    setTimeout(function () {
        const splash = document.getElementById("splash-screen");

        splash.style.opacity = "0";

        setTimeout(function () {
            splash.style.display = "none";
        }, 500);

    }, 1000);

});


// GET ELEMENTS
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const authSection = document.getElementById("auth-section");
const mainWebsite = document.getElementById("main-website");


// SHOW SIGN UP PAGE
document.getElementById("show-signup").addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});


// SHOW LOGIN PAGE
document.getElementById("show-login").addEventListener("click", function (e) {
    e.preventDefault();

    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});


// SIGN UP FUNCTION
document.getElementById("signup").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // CHECK PASSWORD
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // GET SAVED ACCOUNTS
    let users = JSON.parse(localStorage.getItem("uccUsers")) || [];

    // CHECK EXISTING EMAIL
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("This email is already registered!");
        return;
    }

    // CREATE ACCOUNT
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("uccUsers", JSON.stringify(users));

    alert("Account created successfully! You can now log in.");

    // CLEAR SIGNUP FORM
    document.getElementById("signup").reset();

    // RETURN TO LOGIN
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

});


// LOGIN FUNCTION
document.getElementById("login").addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value;

    // GET REGISTERED ACCOUNTS
    let users = JSON.parse(localStorage.getItem("uccUsers")) || [];

    // FIND ACCOUNT
    const user = users.find(function (account) {
        return account.email === email && account.password === password;
    });

    if (user) {
        alert("Welcome to Union Christian College, " + user.name + "!");
        enterWebsite(user.name);
    } else {
        alert("Invalid email or password. Please try again.");
    }

});


// ENTER MAIN WEBSITE
function enterWebsite(name) {

    authSection.classList.add("hidden");
    mainWebsite.classList.remove("hidden");

    window.scrollTo(0, 0);

    const heroTitle = document.querySelector(".hero-content h1");

    heroTitle.innerHTML =
        "Welcome, " + name.split(" ")[0] + "!<br>Lead with <span>Faith.</span>";
}


// CONTINUE AS GUEST
document.getElementById("guest-login").addEventListener("click", function () {

    authSection.classList.add("hidden");
    mainWebsite.classList.remove("hidden");

    window.scrollTo(0, 0);

});


// LOG OUT
document.getElementById("logout-button").addEventListener("click", function () {

    mainWebsite.classList.add("hidden");
    authSection.classList.remove("hidden");

    document.getElementById("login").reset();

    // RESTORE ORIGINAL WELCOME MESSAGE
    document.querySelector(".hero-content h1").innerHTML =
        "Learn with Purpose.<br>Lead with <span>Faith.</span>";

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    window.scrollTo(0, 0);

});
