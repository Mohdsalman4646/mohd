const wrapper =document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link');
const registerlink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close');
loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})
registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})
btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
})
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");

    toggleButton.addEventListener("click", () => {
        // Toggle the type attribute
        const isPassword = passwordInput.getAttribute("type") === "password";
        passwordInput.setAttribute("type", isPassword ? "text" : "password");

        // Change button text or icon
        toggleButton.textContent = isPassword ? "👁" : "🙈";
    });
});
