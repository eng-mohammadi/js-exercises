// Definition of Variables
const mainDiv = document.createElement("div");
const mainDivContainer = document.createElement("div");
const formDiv = document.createElement("div");
const registryDiv = document.createElement("div");
const pRegistryElement = document.createElement("p");
const formRegistryElement = document.createElement("form");
const inputDiv = document.createElement("div");
const emailInputElement = document.createElement("input");
const passwordInputElement = document.createElement("input");
const confirmPasswordInputElement = document.createElement("input");
const button = document.createElement("button");
let loginDiv = document.createElement("div");
let pLoginElement = document.createElement("p");
const formLoginElement = document.createElement("form");
const loginInputDiv = document.createElement("div");
const loginInputEmailElement = document.createElement("input");
const loginInputPasswordElement = document.createElement("input");
const loginButtonElement = document.createElement("button");
// End of Definition of Variables

// Definition of Classes
mainDiv.className = "main-div";
mainDivContainer.className = "main-div__container";
formDiv.className = "form-div";
registryDiv.className = "registry-div";
pRegistryElement.className = "registry-title";
inputDiv.className = "input-div";
emailInputElement.className = "input";
passwordInputElement.className = "input";
confirmPasswordInputElement.className = "input";
button.className = "button";
loginDiv.className = "login-div";
pLoginElement.className = "login-title";
// End of Definition of Classes

// Defining The Content of Elements
pRegistryElement.textContent = "ثبت نام";
button.textContent = "ثبت نام";
pLoginElement.textContent = "ورود";
// End of Element Content Definition

// Set Attribute Properties
formRegistryElement.setAttribute("action", "#");
formRegistryElement.setAttribute("method", "post");
emailInputElement.setAttribute("type", "email");
emailInputElement.setAttribute("name", "Email");
emailInputElement.setAttribute("id", "Email");
emailInputElement.setAttribute("placeholder", "ایمیل");
passwordInputElement.setAttribute("type", "password");
passwordInputElement.setAttribute("name", "Password");
passwordInputElement.setAttribute("id", "Password");
passwordInputElement.setAttribute("placeholder", "رمز عبور");
confirmPasswordInputElement.setAttribute("type", "password");
confirmPasswordInputElement.setAttribute("name", "ConfirmPassword");
confirmPasswordInputElement.setAttribute("id", "ConfirmPassword");
confirmPasswordInputElement.setAttribute("placeholder", "تکرار رمز عبور");
button.setAttribute("type", "button");
loginButtonElement.setAttribute("type", "button");
// End of Set Attribute Properties

// Append Child
mainDiv.appendChild(mainDivContainer);
mainDivContainer.appendChild(formDiv);
formDiv.appendChild(registryDiv);
formRegistryElement.appendChild(pRegistryElement);
formRegistryElement.appendChild(inputDiv);
registryDiv.appendChild(formRegistryElement);
inputDiv.appendChild(emailInputElement);
inputDiv.appendChild(passwordInputElement);
inputDiv.appendChild(confirmPasswordInputElement);
inputDiv.appendChild(button);
loginDiv.appendChild(pLoginElement);
registryDiv.appendChild(loginDiv);
document.body.appendChild(mainDiv);
// End of Append Child

// Add or Remove Events
pLoginElement.addEventListener("click", showLoginInfo);
pRegistryElement.addEventListener("click", showRegistryInfo);
// End of Add or Remove Events

// Functions
function showRegistryInfo() {
  registryDiv.removeChild(loginDiv);
  showAgainLoginInfo();
}

function showAgainLoginInfo() {
  loginDiv = document.createElement("div");
  pLoginElement = document.createElement("p");
  loginDiv.classList.add("login-div");
  pLoginElement.classList.add("login-title");
  pLoginElement.textContent = "ورود";
  loginDiv.appendChild(pLoginElement);
  registryDiv.appendChild(loginDiv);
  pLoginElement.addEventListener("click", showLoginInfo);
}

function showLoginInfo() {
  formLoginElement.setAttribute("action", "#");
  formLoginElement.setAttribute("method", "post");
  loginInputDiv.classList.add("input-div");
  loginInputEmailElement.setAttribute("type", "email");
  loginInputEmailElement.setAttribute("name", "LoginEmail");
  loginInputEmailElement.setAttribute("id", "LoginEmail");
  loginInputEmailElement.setAttribute("placeholder", "ایمیل");
  loginInputEmailElement.classList.add("input");
  loginInputPasswordElement.setAttribute("type", "password");
  loginInputPasswordElement.setAttribute("name", "loginPassword");
  loginInputPasswordElement.setAttribute("id", "loginPassword");
  loginInputPasswordElement.setAttribute("placeholder", "رمز عبور");
  loginInputPasswordElement.classList.add("input");
  loginButtonElement.textContent = "ورود";
  loginButtonElement.classList.add("button");
  loginInputDiv.appendChild(loginInputEmailElement);
  loginInputDiv.appendChild(loginInputPasswordElement);
  loginInputDiv.appendChild(loginButtonElement);
  formLoginElement.appendChild(loginInputDiv);
  loginDiv.appendChild(formLoginElement);
  registryDiv.style.position = "relative";
  loginDiv.style.position = "absolute";
  loginDiv.style.transform = "translate(0,-375px)";
}
// End of Functions
