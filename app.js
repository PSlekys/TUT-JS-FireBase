const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (user) {
  } else {
  }
});
