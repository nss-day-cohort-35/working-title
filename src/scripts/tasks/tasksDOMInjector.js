import taskComponentMaker from "./tasksWebComponent.js";

const tasksInjectDOM = {
    addFormToDOM: () => {
        document.querySelector("#tasksContainer").innerHTML += taskComponentMaker.makeTaskSection();
    },
    addResultsToDOM: function (tasks){
        console.log("add results to dom is being called")
        tasks.forEach(item => {
            const taskContainer = document.querySelector("#taskResultSection");
            taskContainer.innerHTML += taskComponentMaker.makeTaskResults(item);
        })
    }
}

export default tasksInjectDOM

