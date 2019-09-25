
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
        tasksListeners.taskSubmit();
        //this is where we start the logic for edit and delete button
        const resultsContainer = document.querySelector("#taskResultSection").addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteTask--")) {
                // Extract donut id from the button's id attribute
                console.log(event, event.target.id.split("--")[1])
                document.querySelector("#taskResultSection").innerHTML = "";
                tasksApi.deleteTask(event.target.id.split("--")[1])
                    .then(response => {
                        // 4. clear donut-container before adding new donut
                        // 6. get all the donuts again
                        tasksApi.getTask(sessionToken)
                            .then(data => tasksInjectDOM.addResultsToDOM(data));
                        // tasksApi.getTask().then((allTasks) => {
                        //     allTasks.forEach(task => {
                        //         console.log("can you hear me?" + allTasks)
                        //         // 7. needs to send donut to DOM
                        //         taskComponentMaker.makeTaskResults(task)
                    })
            } else if (event.target.id.startsWith("#editTask--")) {
                console.log("edit", event.target.id.split("--")[1])
                // editForm(event.target.id.split("--")[1])
            }
        })
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