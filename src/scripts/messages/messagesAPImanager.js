let messagesApi = {

    saveEntry: function (entry) {
        return fetch("http://localhost:8088/messages", { // save to list "entries"
            method: "POST",
            headers: {
                //'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry) // save the data to file
        })

    },

    getEntries: function () {
        console.log("Getting entries");
        return fetch("http://localhost:8088/messages?_expand=user").then(entrieslist => entrieslist.json())

    },


    removeEntry: function (remove) {

        return fetch(`http://localhost:8088/messages/${remove}`, {
            method: "DELETE"
        }).then(entrieslist => entrieslist.json())

    },

    editEntry: function (entry, id) {

        return fetch(`http://localhost:8088/messages/${id}`, { // save to list "entries"
            method: "PUT",
            headers: {
                //'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry) // save the data to file
        })
    }
}

export default messagesApi;