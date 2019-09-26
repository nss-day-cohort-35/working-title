import taskComponentMaker from "./tasksWebComponent.js";

const tasksDOMInjector = {
    addFormToDOM: () => {
        document.querySelector("#tasks-container").innerHTML += taskComponentMaker.makeTaskInputForm();
    },
    addResultsToDOM: (tasks) => {
        console.log("add results to dom is being called")
        tasks.forEach(task => {
            const taskContainer = document.querySelector("#tasks-results-container");
            taskContainer.innerHTML += taskComponentMaker.makeTaskResults(task);
        })
    }
}

export default tasksDOMInjector

