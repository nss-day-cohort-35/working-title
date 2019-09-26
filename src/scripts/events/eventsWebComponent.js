const  eventsWebComponent = {
    eventsForm() {
      return `
          <fieldset id="events_HTML_Form">
              <input id="events_title" type="text" placeholder="Title">
              <input id="events_location" type="text" placeholder="Location">
              <input id="events_date" type="date">
              <button id="save-events-btn" type="button">Save New Event</button>
              <button id="cancel-events-btn" type="button">Cancel Event</button>
          </fieldset>
  `;
    },
    eventsCardHtml(events) {
      return `
          <div id="eventsCard--${events.id}">
              <h2>${events.events_title}</h2>
              <p> ${events.events_location}</p>
              <p>${events.events_date}</p>
              <button id="edit-events-btn--${events.id}">Edit</button>
              <button id="delete-events-btn--${events.id}">Delete</button>
          </div>
          `;
    },
    addEventsButton() {
      return `
      <button id="addEventsButton" type="button">Add Event</button>
      <button id="showEventsButton" type="button">Show Events</button>
      `;
    },
    editEventsHtml(eventsObj) {
      return `
          <fieldset id="new-events-form">
          <input id="edit-events-title" type="text" value="${eventsObj.events_title}">
          <input id="edit-events-location" type="text" value="${eventsObj.events_location}">
          <input id="edit-events-date"" type="date" value="${eventsObj.events_date}">
          <button id="save-events-edits-btn--${eventsObj.id}">Save Changes</button>
      </fieldset>`;
    },
    addEmptyEvent() {
      return "";
    }
  }

export default eventsWebComponent;

/*Story
As a user, I should be able to enter in an event that will happen at a future date, and when that event is next on the agenda, it should be more prominent in the application

Acceptance Criteria
Given a user wants to keep track on a future event
When the user clicks an affordance to enter a new event in the application
Then a form should be presented to the user in which the following properties of the event can be provided

Name of event
Date of event
Location of event
Given a user has entered in all details of an event
When the user performs a gesture to save the event
Then the event should be displayed in the application in the Events component
Given a user has entered in 1, or more, events
When the event component is updated
Then the next event on the agenda should have bold text
And it should be slightly larger in size
And it should have a non-white, and non-offensive background color

Given a user wants to change the details of an event
When the user performs a gesture to edit an event
Then the user should be presented with a form that has the event details pre-filled into the fields
And there should be an affordance to save the new details */
