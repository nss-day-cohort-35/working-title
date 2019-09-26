import eventsComponentMaker from "./eventsWebComponent.js";
import eventsApiManager from "./eventsAPIManager.js";
import eventsDomInjector from "./eventsDOMInjector.js";
import eventsListeners from "./eventsEventListeners.js";
let eventsProcessor = {

    start:() => {
        eventsInjectDOM.addFormToDOM(eventsComponentMaker.makEventsSection());
        tasksApi.getTask().then(response => this.handleEvents(response));
    },
    handleTasks:() => {
        eventsApi.getEvents().then(response => eventsInjectDOM.addResultsToDOM(response));
    },
}

export default eventsProcessor