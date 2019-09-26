
import tasksWebComponent from "./tasksWebComponent.js";
import tasksAPIManager from "./tasksAPIManager.js";
import tasksDOMInjector from "./tasksDOMInjector.js";
import tasksEventListeners from "./tasksEventListeners.js"

let tasksProcessor = {

    start: () => {
        console.log("task start is running")
        let userId = sessionStorage.getItem("activeUser")
        tasksDOMInjector.addFormToDOM(tasksWebComponent.makeTaskInputForm());
        let sessionToken = sessionStorage.getItem("activeUser")
        tasksAPIManager.getTask(sessionToken)
            .then(data => tasksDOMInjector.addResultsToDOM(data));
        tasksEventListeners.submitTasks();
        tasksEventListeners.deleteEditTasks();
                // document.querySelector(".newsIdentifier").innerHTML = "New News Entry"; // set the headline to tell user that they are no longer editing
                // document.querySelector("#newsSubmit").innerHTML = "Submit"; // set the save button's text to reflect the no longer editing state
                // document.querySelector("#idEdit").value = "";

            }
}

export default tasksProcessor;