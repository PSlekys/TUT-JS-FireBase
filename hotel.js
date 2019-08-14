const db = firebase.firestore();
const addForm = document.getElementById("add-comment");
const auth = firebase.auth();

db.collection("reviews")
  .orderBy("time")
  .get()
  .then(snapshot => snapshot.docs.forEach(doc => displayComment(doc)))
  .catch(e => console.log(e.message));

function displayComment(doc) {
  const reviewsLocation = document.querySelector(".reviews");
  const div = document.createElement("div");

  div.classList += "comment";
  div.setAttribute("data-id", doc.id);

  const t = new Date(1970, 0, 1);
  t.setSeconds(doc.data().time.seconds);
  div.textContent = doc.data().review + " (" + t.toLocaleDateString("lt") + ")";
  reviewsLocation.append(div);

  div.addEventListener("click", () => {
    db.collection("reviews")
      .doc(div.getAttribute("data-id"))
      .delete();
  });
}

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const dateNow = new Date().getTime() / 1000;
  db.collection("reviews").add({
    review: e.target.comment.value,
    time: {
      seconds: dateNow
    }
    // time: firebase.firestore.Timestamp.fromDate(new Date())
  });
  e.target.comment.value = "";

  const errorLocation = document.querySelector(".error");
  errorLocation.style.background = "green";
  errorLocation.textContent = "Successfully written a comment";
});
