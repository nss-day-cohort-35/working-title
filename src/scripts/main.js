import authProcessor from "./auth/authProcessor";
import newsProcessor from "./news/newsProcessor";
import tasksProcessor from "./tasks/tasksProcessor";
import authInjectDOM from "./auth/authDOMInjector";

//this calls the login page for the user//
authProcessor.Landing()

//this calls the nav buttons, NEED TO ADD IF/ELSE TO CHECK FOR SESSION STORAGE//
authInjectDOM.addNavtoDOM();

console.log("Starting...");

//these are event listeners that control the elements on the page they clear out all other containers then populate only what you wanted based on button clicked in navigation (ie controlled by processor.start) Will need to wrap these in IF/ELSE statements to check if user is logged in.//

//task nav button//
document.querySelector("#taskNavbutton").addEventListener("click", event => {
    console.log("Task Navigational button has been called")
        authInjectDOM.clearContainers();
        tasksProcessor.start();
})
//home button but populate news//
document.querySelector("#homeNavbutton").addEventListener("click", event => {
    console.log("home/news Navigational button has been called")
        authInjectDOM.clearContainers();
        newsProcessor.start();
})
//messages nav button//
document.querySelector("#messagesNavbutton").addEventListener("click", event => {
    console.log("messages Navigational button has been called")
        authInjectDOM.clearContainers();
        messagesProcessor.start();
})
//events nav button//
document.querySelector("#eventsNavbutton").addEventListener("click", event => {
    console.log("events Navigational button has been called")
        authInjectDOM.clearContainers();
        eventsProcessor.start();
})
//friends nav button//
document.querySelector("#friendsNavbutton").addEventListener("click", event => {
    console.log("friends Navigational button has been called")
        authInjectDOM.clearContainers();
        friendsProcessor.start();
})
//logout nav button//
document.querySelector("#logoutNavbutton").addEventListener("click", event => {
    console.log("logout Navigational button has been called")
        authInjectDOM.clearContainers();
        //need to add something regarding logout, you will clear the session storage//
        // Remove saved data from sessionStorage
        sessionStorage.removeItem("activeUser");
        authProcessor.signUp();
})