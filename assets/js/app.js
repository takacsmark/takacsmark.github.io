$(function () {
  /***************************************
   * Page view count
   **************************************/
  var db = firebase.firestore();

  if (window.location.pathname != "/") {
    //Displays view count on post pages
    let urlPath = window.location.pathname.replace("/", "");
    let docRef = db.collection("page-stats").doc(urlPath);

    docRef.onSnapshot(function (doc) {
      if (!doc.metadata.hasPendingWrites) {
        console.log("Server data: ", doc.data());
        document.getElementById("view-count").innerHTML =
          doc.data().viewCount.toLocaleString() + " views";
      }
    });

    docRef.set(
      {
        viewCount: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
  } else {
    //Displays view counts on home page
    let pageStatsRef = db.collection("page-stats");

    pageStatsRef.onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        node = document.getElementById("/" + doc.id + "/");
        if (!!node) {
          newHTML = doc.data().viewCount.toLocaleString() + " views";
          if (node.innerHTML != newHTML) {
            node.innerHTML = newHTML;
          }
        }
      });
    });

    pageStatsRef
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          node = document.getElementById("/" + doc.id + "/");
          if (!!node) {
            node.innerHTML = doc.data().viewCount.toLocaleString() + " views";
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
});
