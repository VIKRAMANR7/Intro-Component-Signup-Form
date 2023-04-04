var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var emailId = document.getElementById("email");
var password = document.getElementById("pwd");
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", checkFirstName);
submitButton.addEventListener("click", checkLastName);
submitButton.addEventListener("click", checkEmail);
submitButton.addEventListener("click", checkPassword);
document.body.addEventListener("click", resetAll);

function checkFirstName(firstVal) {
  firstVal.preventDefault();
  let firstNameInput = firstName.value;
  if (
    typeof firstNameInput !== "string" ||
    /[0-9]+/g.test(firstNameInput) ||
    firstNameInput === ""
  ) {
    document.getElementById("lbltxt-fname").style.display = "block";
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.style.backgroundImage = "url('./images/icon-error.svg')";
    firstName.style.backgroundRepeat = "no-repeat";
    firstName.style.backgroundPosition = "center right 20px";
  } else {
    document.getElementById("lbltxt-fname").style.display = "none";
    firstName.style.border = "2px solid hsl(248, 32%, 49%)";
    firstName.style.backgroundImage = "none";
  }
}

function checkLastName(lastVal) {
  lastVal.preventDefault();
  let lastNameInput = lastName.value;
  if (
    typeof lastNameInput !== "string" ||
    /[0-9]+/g.test(lastNameInput) ||
    lastNameInput === ""
  ) {
    document.getElementById("lbltxt-lname").style.display = "block";
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastName.style.backgroundImage = "url('./images/icon-error.svg')";
    lastName.style.backgroundRepeat = "no-repeat";
    lastName.style.backgroundPosition = "center right 20px";
  } else {
    document.getElementById("lbltxt-lname").style.display = "none";
    lastName.style.border = "2px solid hsl(248, 32%, 49%)";
    lastName.style.backgroundImage = "none";
  }
}

function checkEmail(emailVal) {
  emailVal.preventDefault();
  let emailInput = emailId.value;
  let regex =
    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/;
  if (regex.test(emailInput) || emailInput === "") {
    document.getElementById("lbltxt-email").style.display = "block";
    emailId.style.border = "2px solid hsl(0, 100%, 74%)";
    emailId.style.backgroundImage = "url('./images/icon-error.svg')";
    emailId.style.backgroundRepeat = "no-repeat";
    emailId.style.backgroundPosition = "center right 20px";
  } else {
    document.getElementById("lbltxt-email").style.display = "none";
    emailId.style.border = "2px solid hsl(248, 32%, 49%)";
    emailId.style.backgroundImage = "none";
  }
}

function checkPassword(pwdVal) {
  pwdVal.preventDefault();
  let pwdInput = password.value;
  let regexPwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (regexPwd.test(pwdInput) || pwdInput === "") {
    document.getElementById("lbltxt-pwd").style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    password.style.backgroundImage = "url('./images/icon-error.svg')";
    password.style.backgroundRepeat = "no-repeat";
    password.style.backgroundPosition = "center right 20px";
  } else {
    document.getElementById("lbltxt-pwd").style.display = "none";
    password.style.border = "2px solid hsl(248, 32%, 49%)";
    password.style.backgroundImage = "none";
  }
}

function resetAll(e) {
  if (e.target.id !== "submit") {
    document.getElementById("lbltxt-fname").style.display = "none";
    firstName.style.border = "2px solid hsl(0, 0%, 83%)";
    firstName.style.backgroundImage = "none";
    document.getElementById("lbltxt-lname").style.display = "none";
    lastName.style.border = "2px solid hsl(0, 0%, 83%)";
    lastName.style.backgroundImage = "none";
    document.getElementById("lbltxt-email").style.display = "none";
    emailId.style.border = "2px solid hsl(0, 0%, 83%)";
    emailId.style.backgroundImage = "none";
    document.getElementById("lbltxt-pwd").style.display = "none";
    password.style.border = "2px solid hsl(0, 0%, 83%)";
    password.style.backgroundImage = "none";
  }
}
