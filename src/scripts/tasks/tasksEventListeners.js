import taskComponentMaker from "./tasksWebComponent.js"
import tasksApi from "./tasksAPImanager.js";
import tasksInjectDOM from "./tasksDOMInjector.js";

let tasksListeners = {
    taskSubmit: () => {
        document.querySelector("#taskSubmit").addEventListener("click", function (event) {
            event.preventDefault();
            // submit button
            console.log("Submitting");
            // if (document.querySelector("#taskEdit").value === "" && document.querySelector("#taskTimeout").value === "") {
                let sessionToken = sessionStorage.getItem("activeUser")
                let submitTaskObj = {
                    date: document.querySelector("#taskDueDate").value,
                    //this is where we're getting the UserId, not in the fetch URL.
                    userId: sessionToken,
                    name: document.querySelector("#taskName").value,
                }
                console.log(submitTaskObj);
                tasksApi.saveTask(submitTaskObj).then(() => {
                    document.querySelector("#taskResultSection").innerHTML = ""
                    tasksApi.getTask(sessionToken)
                    .then(data => tasksInjectDOM.addResultsToDOM(data));
                })
            }
        )}
}

export default tasksListeners
