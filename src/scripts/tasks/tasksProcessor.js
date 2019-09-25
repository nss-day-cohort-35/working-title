
import taskComponentMaker from "./tasksWebComponent.js";
import tasksApi from "./tasksAPImanager.js";
import tasksInjectDOM from "./tasksDOMInjector.js";
import tasksListeners from "./tasksEventListeners.js"

let tasksProcessor = {

    start: function () {
        console.log("task start is running")
        let userId = sessionStorage.getItem("activeUser")
        tasksInjectDOM.addFormToDOM(taskComponentMaker.makeTaskSection());
        let sessionToken = sessionStorage.getItem("activeUser")
        tasksApi.getTask(sessionToken)
            .then(data => tasksInjectDOM.addResultsToDOM(data));
        // tasksApi.getTask(userId).then(tasks => {
        //     console.log("render tasks is running")
        //     tasksApi.getTask().then(data => tasksInjectDOM.addResultsToDOM(data));
            tasksListeners.taskSubmit();
        }
    }

    // calling the API and getting all tasks and posting to the DOM.
    // renderTasks: function () {
    //     console.log("render tasks is running")
    //     tasksApi.getTask().then(data => tasksInjectDOM.addResultsToDOM(data));
    //     tasksListeners.taskSubmit();
    // }
    // saveTasks: () => {
    //     console.log("task save is running")
    //     // tasksApi.saveTask().then(data => tasksInjectDOM.addResultsToDOM(data));
    //         document.querySelector("#taskSubmit").addEventListener("click", function (event) {
    //             event.preventDefault();
    //             // submit button
    //             console.log("Submitting");
    //             // if (document.querySelector("#taskEdit").value === "" && document.querySelector("#taskTimeout").value === "") {

    //                 let submitTaskObj = {
    //                     date: document.querySelector("#taskDueDate").value,
    //                     //this is where we're getting the UserId, not in the fetch URL.
    //                     userId: sessionStorage.getItem("activeUser"),
    //                     name: document.querySelector("#taskName").value,
    //                 }
    //                 tasksApi.saveTask(submitTaskObj).then(() => {
    //                     document.querySelector("tasksResultContainer").innerHTML = ""
    //                     tasksApi.getTasks(userId)
    //                     .then(data => tasksInjectDOM.addResultsToDOM(data));
    //                 })
    //             }
        //      )}

export default tasksProcessor;