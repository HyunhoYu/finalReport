const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form  input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERKEY_NAME = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERKEY_NAME, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
    
}

function paintGreeting () {
    const username = localStorage.getItem(USERKEY_NAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERKEY_NAME);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}