import taskComponentMaker from "./tasksWebComponent.js"
import tasksAPIManager from "./tasksAPIManager.js";
import tasksDOMInjector from "./tasksDOMInjector.js";

let tasksEventListeners = {
    submitTasks: () => {
        //start the if else here for the submit, check for //
        document.querySelector("#tasks-submit-button").addEventListener("click", (event) => {
            event.preventDefault();
            // submit button
            console.log("Submitting");
            // if (document.querySelector("#taskEdit").value === "" && document.querySelector("#taskTimeout").value === "") {
                let sessionToken = sessionStorage.getItem("activeUser")
                let submitTaskObj = {
                    date: document.querySelector("#tasks-date-input").value,
                    //this is where we're getting the UserId, not in the fetch URL.
                    userId: sessionToken,
                    name: document.querySelector("#tasks-name-input").value,
                    complete: false
                }
                console.log(submitTaskObj);
                tasksAPIManager.saveTask(submitTaskObj).then(() => {
                    document.querySelector("#tasks-results-container").innerHTML = ""
                    tasksAPIManager.getTask(sessionToken)
                    .then(data => tasksDOMInjector.addResultsToDOM(data));
                })
            }
        )},
        deleteEditTasks: () => {
        //this is where we start the logic for edit and delete button
        const resultsContainer = document.querySelector("#tasks-results-container").addEventListener("click", (event) => {
            if (event.target.id.startsWith("delete-task--")) {
                // Extract donut id from the button's id attribute
                console.log(event, event.target.id.split("--")[1])
                document.querySelector("#tasks-results-container").innerHTML = "";
                tasksAPIManager.deleteTask(event.target.id.split("--")[1])
                    .then(response => {
                        tasksAPIManager.getTask(sessionToken)
                            .then(data => tasksDOMInjector.addResultsToDOM(data));
                    })
            } else if (event.target.id.startsWith("#edit-task--")) {
                console.log("edit", event.target.id.split("--")[1])
                editForm(event.target.id.split("--")[1])
                   tasksAPIManager.getSpecificTask(taskId)
                    .then(response => {
                        editEntryID.value = entryId;
                        editConcept.value = response.concept;
                        editDate.value = response.date;
                        editContent.value = response.content;
                        editMood.value = response.mood;
//this is the querying the containers for the form at top of the page and setting them to the values from json
                    const editForm = (taskId) => {
                    let editUserId  = sessionToken
                    let editId = document.querySelector("#")
                    let editDate = document.querySelector("#")
                    let editName = document.querySelector("#")
                    //
                    })
                }

                    // document.querySelector("#newsDate").value = document.querySelector(`#newsDate${id}`).innerHTML;
                    // document.querySelector("#newsTitle").value = document.querySelector(`#newsTitle${id}`).innerHTML;
                    // document.querySelector("#newsSummary").value = document.querySelector(`#newsSummary${id}`).innerHTML;
                    // document.querySelector("#newsUrl").value = document.querySelector(`#newsUrl${id}`).innerHTML;

                    // document.querySelector("#idEdit").value = id; // set hidden value to store if of what is being edited
                    // document.querySelector(".newsIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
                    // document.querySelector("#newsSubmit").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state

                    // let submitTaskObj = {
                    //     date: document.querySelector("#taskDueDate").value,
                    //     //this is where we're getting the UserId, not in the fetch URL.
                    //     userId: sessionStorage.getItem("activeUser"),
                    //     name: document.querySelector("#taskName").value
                    //                     }
                    // let hiddenTaskId = document.querySelector("#taskIdEdit").value;
                    //     }
                    // newsApi.editEntry(submitTaskObj, hiddenTaskId).then(function(uselessdata) {newsApi.getEntries().then(data => newsProcessor.handleNews(data))});
        }})}}

export default tasksEventListeners
