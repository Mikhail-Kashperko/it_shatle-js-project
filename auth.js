const signInBtn = document.getElementById('sign_in-btn');
const signInForm = document.getElementById('sign_in-form');
const signUpBtn = document.getElementById('sign_up-btn');
const signUpForm = document.getElementById('sign_up-form');
const signUpEmail = document.getElementById('sign_up-email');
const signUpPassword = document.getElementById('sign_up-password');
const signInEmail = document.getElementById('sign_in-email');
const sigInPassword = document.getElementById('sign_in-password');


signInBtn.onclick = () => {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none'
};

signUpBtn.onclick = () => {
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none'
};

signUpForm.onsubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(signUpEmail.value, signUpPassword.value);
};

signInForm.onsubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem(signInEmail.value) && sigInPassword === localStorage.getItem(signInEmail.value)) {
        alert('Hi!');
    } else {
        alert('Wrong email or password');
    }
};