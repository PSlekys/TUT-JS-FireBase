const auth = firebase.auth();

document.getElementById("sign-up-form").addEventListener("submit", e => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const rpassword = e.target.rpassword.value;

  const errorLocation = document.querySelector(".error");

  if (password === rpassword) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        e.target.email.value = "";
        errorLocation.style.background = "green";
        errorLocation.innerHTML = "You have successfully registered";
      })
      .catch(e => (errorLocation.innerHTML = e.message));
  } else {
    errorLocation.innerHTML = "Oops, different passwords!";
  }

  e.target.password.value = "";
  e.target.rpassword.value = "";
});
