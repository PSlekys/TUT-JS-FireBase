auth.onAuthStateChanged(user => {
  const signUpLink = document.getElementById("sign-up-link");
  const signOutLink = document.getElementById("sign-out-link");
  const signInLink = document.getElementById("sign-in-link");
  const hotelLink = document.getElementById("hotel-link");

  if (user) {
    signUpLink.style.display = "none";
    signInLink.style.display = "none";
    signOutLink.addEventListener("click", () => {
      auth.signOut();
    });

    if (location.pathname.includes("hotel")) {
      hotelLink.style.fontWeight = "900";
    }
  } else {
    if (location.pathname.includes("hotel")) {
      location.href = "./signin.html";
    }
    signOutLink.style.display = "none";
    hotelLink.style.display = "none";
    if (location.pathname.includes("signup")) {
      signUpLink.style.fontWeight = "bold";
    } else if (location.pathname.includes("signin")) {
      signInLink.style.fontWeight = "bold";
    }
  }
});
