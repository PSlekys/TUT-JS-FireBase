const auth = firebase.auth();

document.getElementById("sign-in-form").addEventListener("submit", e => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const errorLocation = document.querySelector(".error");

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "./hotel.html";
    })
    .catch(error => {
      errorLocation.innerHTML = error.message;
      e.target.email.value = "";
      e.target.password.value = "";
    });
});
