import eventsComponentMaker from "./eventsWebComponent"


const eventsDOMInjector = {
    addFormToDOM: () => {
        document.querySelector("#events-container").innerHTML += eventsComponentMaker.makeEventsSection();
    },
    addResultsToDOM: function (events){
        tasks.forEach(task => {
            const eventsContainer = document.querySelector("#events-section");
            eventsContainer.innerHTML += eventsComponentMaker.makeEventsResults(events);
        })
    }
}

export default eventsDOMInjector