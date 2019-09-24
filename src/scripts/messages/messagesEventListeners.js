import messagesApi from "./newsAPImanager.js";

import messagesDomInjector from "./messagesDomInjector";

import messagesProcessor from "./messagesProcessor";

import messagesComponentMaker from "./messagesWebComponent";

let messagesListeners = {
  makeButtons: function() {
    document
      .querySelector("#messagesSubmit")
      .addEventListener("click", function(e) {
        e.preventDefault();

        // submit button
        console.log("Submitting");
        if (
          document.querySelector("#idMessageEdit").value === "" &&
          document.querySelector("#timeoutVar2").value === ""
        ) {
          let sumbitData = {
            date: document.querySelector("#messagesDate").value,
            userId: sessionStorage.getItem("activeUser"),
            text: document.querySelector("#messagesText").value
          };

          newsApi.saveEntry(sumbitdata).then(function(uselessdata) {
            newsApi.getEntries().then(data => newsProcessor.handleNews(data));
          });
          //note to self: .then(randomvarname => unrelatedfunction(lol)) does not work, have to use
          // .then(function(randomvarname) {unrelatedfunction(lol)}) instead. Put this in the capstone site's data.

          //newsDomInjector.inject(newsComponentMaker.makeUneditableNewsArticle(sumbitdata) ,"#newsSection");
        } else {
          let sumbitData = {
            id: document.querySelector("#idMessagesEdit").value,
            userId: sessionStorage.getItem("activeUser"),
            text: document.querySelector("#newsSummary").value,
            date: document.querySelector("messagesDate").value
          };

          let savedId = document.querySelector("#idMessagesEdit").value;

        //   document.querySelector(".messagesIdentifier").innerHTML =
        //     "New News Entry"; // set the headline to tell user that they are no longer editing
        //   document.querySelector("#newsSubmit").innerHTML = "Submit"; // set the save button's text to reflect the no longer editing state
        //   document.querySelector("#idEdit").value = "";

          messagesApi.editEntry(sumbitData, savedId).then(function(uselessData) {
            messagesApi.getEntries().then(data => messagesProcessor.handleMessages(data));
          });

          //newsDomInjector.replace(`#section${savedid}`,newsComponentMaker.makeUneditableNewsArticle(sumbitdata));
        }
      });

    let dellist = document.querySelectorAll(".newsDelete");
    console.log(dellist);
    let editlist = document.querySelectorAll(".newsEdit");
    console.log(editlist);

    for (let i = 0; i < dellist.length; i++) {
      dellist[i].addEventListener("click", event => {
        console.log("Deleting:");
        console.log(dellist[i].value);

        newsApi.removeEntry(dellist[i].value).then(function(uselessdata) {
          newsApi.getEntries().then(data => newsProcessor.handleNews(data));
        });
      });

      editlist[i].addEventListener("click", event => {
        if (sessionStorage.getItem("activeUser") === editlist[i].value) {
          this.editEntry(dellist[i].value);
        }
      });
    }
  },

  editEntry: function(id) {
    document.querySelector("#newsDate").value = document.querySelector(
      `#newsDate${id}`
    ).innerHTML;
    document.querySelector("#newsTitle").value = document.querySelector(
      `#newsTitle${id}`
    ).innerHTML;
    document.querySelector("#newsSummary").value = document.querySelector(
      `#newsSummary${id}`
    ).innerHTML;
    document.querySelector("#newsUrl").value = document.querySelector(
      `#newsUrl${id}`
    ).innerHTML;

    document.querySelector("#idEdit").value = id; // set hidden value to store if of what is being edited
    document.querySelector(".newsIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
    document.querySelector("#newsSubmit").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state
  }
};

export default newsListeners;
