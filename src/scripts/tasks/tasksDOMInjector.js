import taskComponentMaker from "./tasksWebComponent";

const tasksInjectDOM = {
    addFormToDOM: () => {
        document.querySelector("#tasksContainer").innerHTML += taskComponentMaker.makeTaskSection();
    },
    addResultsToDOM: function (tasks){
        tasks.forEach(task => {
            const taskContainer = document.querySelector("#taskSection");
            taskContainer.innerHTML += taskComponentMaker.makeTaskResults(task);
        })
    }
}

export default tasksInjectDOM

