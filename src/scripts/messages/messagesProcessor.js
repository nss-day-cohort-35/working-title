import messagesComponentMaker from "./messagesWebComponent.js";
import messagesAPIManager from "./messagesAPIManager.js";
import messagesDomInjector from "./messagesDOMInjector.js";
import messagesEventListeners from "./messagesEventListeners.js";


let messagesProcessor = {

    start: () => {
        messagesDomInjector.set(messagesComponentMaker.makeMessagesSection(), "#messagesContainer");
        messagesEventListeners.submitButton()
        messagesAPIManager.getMessages().then(response => this.handleMessages());

    },

    handleMessages: (list) => {

        messagesDomInjector.erase("#messagesSection");

        let userId = sessionStorage.getItem("activeUser");

        if (userId === null) {
            sessionStorage.setItem("activeUser", 1);
            userId = sessionStorage.getItem("activeUser");
        }

        console.log("active user:");
        console.log(sessionStorage.getItem("activeUser"));

        for (let i = 0; i < list.length; i++) {

            let object = messagesComponentMaker.makeMessagesArticle(list[i]);
            messagesDomInjector.inject(object, "#messagesSection");
        }
        messagesEventListeners.deleteEditButtons();
    }

}






export default messagesProcessor;