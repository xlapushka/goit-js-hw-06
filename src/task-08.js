const form = document.querySelector(".login-form");

function pickUpInForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "") {
    alert("🙏 Please enter all data!! 😺🐭");
  }

  if (password.value.trim() === "") {
    alert("🙏 Please enter all data!! 😺🐭");
  }

  userInfo(email.value.trim(), password.value.trim());
}

function userInfo(email, password) {
  let userInfo = new Object();

  userInfo.email = email;
  userInfo.password = password;

  console.log(userInfo);
  clearForm();
}

function clearForm() {
  form.reset();
}

form.addEventListener("submit", pickUpInForm);
