document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const hiddenContent = document.getElementById("hidden-content");
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.transform = "translateY(-100%)";
        hiddenContent.style.display = "block";
    });
});
