import authProcessor from "./auth/authProcessor";
import newsProcessor from "./news/newsProcessor";
import tasksProcessor from "./tasks/tasksProcessor";
import authDOMInjector from "./auth/authDOMInjector";
import messagesProcessor from "./messages/messagesProcessor.js"

//this calls the login page for the user//
authProcessor.landing();

//this calls the nav buttons, NEED TO ADD IF/ELSE TO CHECK FOR SESSION STORAGE//
// authDOMInjector.addNavtoDOM();

console.log("Starting...");

//these are event listeners that control the elements on the page they clear out all other containers then populate only what you wanted based on button clicked in navigation (ie controlled by processor.start) Will need to wrap these in IF/ELSE statements to check if user is logged in.//

const navControls = {
    navButtonEventListener: () => {
    //task nav button//
    document.querySelector("#tasks-nav-button").addEventListener("click", event => {
        console.log("Task Navigational button has been called")
            authDOMInjector.clearContainers();
            tasksProcessor.start();
    })
    //home button but populate news//
    document.querySelector("#home-nav-button").addEventListener("click", event => {
        console.log("home/news Navigational button has been called")
            authDOMInjector.clearContainers();
            newsProcessor.start();
    })
    //messages nav button//
    document.querySelector("#messages-nav-button").addEventListener("click", event => {
        console.log("messages Navigational button has been called")
            authDOMInjector.clearContainers();
            messagesProcessor.start();
    })
    //events nav button//
    document.querySelector("#events-nav-button").addEventListener("click", event => {
        console.log("events Navigational button has been called")
            authDOMInjector.clearContainers();
            eventsProcessor.start();
    })
    //friends nav button//
    document.querySelector("#friends-nav-button").addEventListener("click", event => {
        console.log("friends Navigational button has been called")
            authDOMInjector.clearContainers();
            friendsProcessor.start();
    })
    //logout nav button//
    document.querySelector("#logout-nav-button").addEventListener("click", event => {
        console.log("logout Navigational button has been called")
            authDOMInjector.clearContainers();
            //need to add something regarding logout, you will clear the session storage//
            // Remove saved data from sessionStorage
            sessionStorage.removeItem("activeUser");
            document.querySelector("#nav-container").innerHTML = "";
            authProcessor.landing();
            console.log("Session Token for current logged in user is:" + sessionToken);
})
}}

export default navControls;