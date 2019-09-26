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
        )
    },
    deleteEditTasks: () => {
        //this is where we start the logic for edit and delete button
        let sessionToken = sessionStorage.getItem("activeUser")
        console.log("can you hear me delete button?")
        const resultsContainer = document.querySelector("#tasks-results-container").addEventListener("click", (event) => {
            if (event.target.id.startsWith("delete-task--")) {
                // Extract id from the button's id attribute
                console.log(event, event.target.id.split("--")[1])
                document.querySelector("#tasks-results-container").innerHTML = "";
                tasksAPIManager.deleteTask(event.target.id.split("--")[1])
                    .then(response => {
                        tasksAPIManager.getTask(sessionToken)
                            .then(data => tasksDOMInjector.addResultsToDOM(data));
                    })
            } else if (event.target.id.startsWith("edit-task--")) {
                console.log("the edit button has been called")
                //this is the querying the containers for the form at top of the page and setting them to the values from json
                // let data = sessionStorage.getItem("activeUser")
                let taskId = event.target.id.split("--")[1]
                const editForm = (taskId) => {
                    let editObject = {
                    editUserId: sessionToken,
                    editId: document.querySelector("#tasks-hidden-input"),
                    editDate: document.querySelector("#tasks-date-input"),
                    editName: document.querySelector("#tasks-name-input")
                }
                return editObject
            }
                console.log("edit", event.target.id.split("--")[1])
                editForm(event.target.id.split("--")[1])
                //this queries the json based on the ID and retrieves one task and stores the values into the following below to be passed to the form//
                tasksAPIManager.getSpecificTask(taskId)
                    .then(response => {
                        editUserId.value = userId;
                        editId.value = response.Id;
                        editDate.value = response.date;
                        editName.value = response.name;
                    })
            }
        })
    }
}

export default tasksEventListeners