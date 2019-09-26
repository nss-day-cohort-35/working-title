const URL = "http://localhost:8088";

let E = "events";
//an API object with 4 methods defining different fetch calls
const eventsAPIManager = {
    getOneJournalEntry: (id) => {
        return fetch(`${URL}/${E}/${id}`).then(response => response.json());
    },

    getAllEvents: () => {
        return fetch(`${URL}/${E}`).then(response => response.json());

    },

    saveEvents: entries => {
        return fetch(`${URL}/${E}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(entries)
        });
    },
    deleteEvent: entryId => {
        return fetch(`${URL}/${E}/${entryId}`, {
            method: "DELETE"
        }).then();
    },
    patchEvent: (id, entries) => {
        return fetch(`${URL}/${E}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entries)
        }).then(r => r.json());
    },
    changeJournalEntries: () => {
        return fetch(`${URL}/${E}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entries)
        }).then(r => r.json());
    }
};

export default eventsAPIManager;