const db = firebase.firestore();

db.collection("reviews")
  .get()
  .then(snapshot => snapshot.docs.forEach(doc => displayComment(doc)));

function displayComment(doc) {
  const reviewsLocation = document.querySelector(".reviews");
  const div = document.createElement("div");

  div.classList += "comment";
  div.setAttribute("data-id", doc.id);
  div.textContent = doc.data().review;
  reviewsLocation.append(div);
}
