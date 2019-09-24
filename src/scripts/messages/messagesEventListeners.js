import messagesApi from "./messagesAPImanager.js";

import messagesDomInjector from "./messagesDomInjector";

import messagesProcessor from "./messagesProcessor";

import messagesComponentMaker from "./messagesWebComponent";

let messagesListeners = {
  makeButtons: function () {
    document
      .querySelector("#messagesSubmit")
      .addEventListener("click", function (e) {
        e.preventDefault();

        // submit button
        console.log("Submitting");
        if (
          document.querySelector("#idMessagesEdit").value === "" &&
          document.querySelector("#timeoutVar2").value === ""
        ) {
          let submitData = {
            date: Date.now(),
            userId: sessionStorage.getItem("activeUser"),
            text: document.querySelector("#messagesText").value
          };

          messagesApi.saveEntry(submitData).then(function (uselessdata) {
            messagesApi.getEntries().then(data => messagesProcessor.handleMessages(data));
          });
          //note to self: .then(randomvarname => unrelatedfunction(lol)) does not work, have to use
          // .then(function(randomvarname) {unrelatedfunction(lol)}) instead. Put this in the capstone site's data.

          //newsDomInjector.inject(newsComponentMaker.makeUneditableNewsArticle(sumbitdata) ,"#newsSection");
        } else {
          let submitData = {
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

          messagesApi.editEntry(submitData, savedId).then(function (uselessData) {
            messagesApi.getEntries().then(data => messagesProcessor.handleMessages(data));
          });

          //newsDomInjector.replace(`#section${savedid}`,newsComponentMaker.makeUneditableNewsArticle(sumbitdata));
        }
      });

    let delList = document.querySelectorAll(".messagesDelete");
    console.log(delList);
    let editList = document.querySelectorAll(".messagesEdit");
    console.log(editList);

    for (let i = 0; i < delList.length; i++) {
      delList[i].addEventListener("click", event => {
        console.log("Deleting:");
        console.log(delList[i].value);

        messagesApi.removeEntry(delList[i].value).then(function (uselessdata) {
          messagesApi.getEntries().then(data => messagesProcessor.handleMessages(data));
        });
      });

      editList[i].addEventListener("click", event => {
        if (sessionStorage.getItem("activeUser") === editList[i].value) {
          this.editEntry(delList[i].value);
        }
      });
    }
  },

  editEntry: function (id) {
    // document.querySelector("#messagesDate").value = document.querySelector(
    //   `#newsDate${id}`
    // ).innerHTML;
    // document.querySelector("#messagesTitle").value = document.querySelector(
    //   `#newsTitle${id}`
    // ).innerHTML;
    document.querySelector("#messagesText").value = document.querySelector(
      `#messagesText${id}`
    ).innerHTML;
    // document.querySelector("#newsUrl").value = document.querySelector(
    //   `#newsUrl${id}`
    // ).innerHTML;

    document.querySelector("#idMessagesEdit").value = id; // set hidden value to store if of what is being edited
    document.querySelector(".messagesIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
    document.querySelector("#messagesSubmit").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state
  }
};

export default messagesListeners;