
import taskComponentMaker from "./tasksWebComponent";
import tasksApi from "./tasksAPImanager";
import tasksInjectDOM from "./tasksDOMInjector";

let tasksProcessor = {

    start: function () {
        tasksInjectDOM.addFormToDOM(taskComponentMaker.makeTaskSection());
        tasksApi.getTask().then(tasks => this.handleTasks(tasks));
    },
    handleTasks: function () {
        tasksApi.getTask().then(data => tasksInjectDOM.addResultsToDOM(data));
    },
}

export default tasksProcessor;