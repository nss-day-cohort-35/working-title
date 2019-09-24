import messagesComponentMaker from "./messagesWebComponent.js";
import messagesApi from "./messagesAPImanager.js";
import messagesDomInjector from "./messagesDOMInjector.js";
import messagesListeners from "./messagesEventListeners.js";

let messagesProcessor = {

    start: function () {
        messagesDomInjector.set(messagesComponentMaker.makeMessagesSection(), "#messagesContainer");
        messagesApi.getEntries().then(entries => this.handleMessages(entries));

    },

    handleMessages: function (list) {

        document.querySelector("#timeoutVar2").value = "!";

        console.log("Processing this list:");
        console.log(list);

        messagesDomInjector.erase("#messagesSection");

        let userId = sessionStorage.getItem("activeUser");

        if (userId === null) {
            sessionStorage.setItem("activeUser", 1);
            userId = sessionStorage.getItem("activeUser");
        }

        console.log("active user:");
        console.log(sessionStorage.getItem("activeUser"));

        for (let i = 0; i < list.length; i++) {

            if (list[i].userId.toString() === userId.toString()) {//activeUser is the key
                let object = messagesComponentMaker.makeMessagesArticle(list[i]);

                // messagesDomInjector.inject(Thing you want to insert, Where you want to insert it into)
                messagesDomInjector.inject(object, "#messagesSection");
            }//this space is reserved for checking all friend objects and populating as if it's from the usser


        }

        messagesListeners.makeButtons();
        document.querySelector("#timeoutVar2").value = "";


    }

}






export default messagesProcessor;