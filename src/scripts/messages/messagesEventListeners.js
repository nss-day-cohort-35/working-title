import messagesAPIManager from "./messagesAPIManager.js";

import messagesDomInjector from "./messagesDomInjector.js";

import messagesProcessor from "./messagesProcessor.js";

import messagesComponentMaker from "./messagesWebComponent.js";
import moment from "moment";
let sessionToken = sessionStorage.getItem("activeUser");
let messagesEventListeners = {
  submitButton: () => {
    document.querySelector("#messages-submit-button").addEventListener("click", e => {
      e.preventDefault();
      document.querySelector("#messages-text").value = "";
      if (document.querySelector("#id-messages-edit").value === "") {
        let submitData = {
          date: moment().format("lll"),
          userId: sessionToken,
          text: document.querySelector("#messages-text").value
        };

        messagesAPIManager.saveMessage(submitData).then(response => {
          messagesAPIManager
            .getEntries(response)
            .then(response => messagesProcessor.handleMessages(response));
        });
      } else {
        let submitData = {
          id: document.querySelector("#id-messagesEdit").value,
          userId: sessionStorage.getItem("activeUser"),
          text: document.querySelector("#messagesText ").value,
          date: document.querySelector("messagesDate").value
        };

        let savedId = document.querySelector("#idMessagesEdit").value;
        messagesAPIManager.editMessage(submitData, savedId).then(response => {
          messagesAPIManager
            .getEntries(response)
            .then(response => messagesProcessor.handleMessages(response));
        });
      }
    });
  },
  deleteEditButtons: () => {
    let deleteArray = document.querySelectorAll("#messages-delete-button");
    console.log(deleteArray);
    let editArray = document.querySelectorAll("#messages-edit-button");
    console.log(editArray);

    for (let i = 0; i < deleteArray.length; i++) {
      deleteArray[i].addEventListener("click", event => {
        messagesAPIManager.removeMessage(deleteArray[i].value).then(response => {
          messagesAPIManager.getEntries(response)
            .then(response => messagesProcessor.handleMessages(response));
        });
      });

      editArray[i].addEventListener("click", event => {
        if (sessionStorage.getItem("activeUser") === editArray[i].value) {
          this.editMessage(editArray[i].value);
        }
      });
    }
  },

  editMessage: (id) => {
    document.querySelector("#messagesText").value = document.querySelector(`#messagesText${id}`).innerHTML;
    document.querySelector("#idMessagesEdit").value = id; // set hidden value to store of what is being edited
    document.querySelector(".messagesIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
    document.querySelector("#messagesSubmit").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state
  }
};

export default messagesEventListeners;