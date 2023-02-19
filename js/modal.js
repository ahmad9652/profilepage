function togglePassword() {
    var passwordInput = document.getElementById("confirmpass");
    var toggleIcon = document.querySelector(".toggle-password i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        
    } else {
        passwordInput.type = "password";
    }
}