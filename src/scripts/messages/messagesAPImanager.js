let messagesApi = {

    saveChat: function (entry) {
        return fetch("http://localhost:8088/news", { // save to list "entries"
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
        return fetch("http://localhost:8088/messages?_expand=users").then(entrieslist => entrieslist.json())

    },


    removeEntry: function (remove) {

        return fetch(`http://localhost:8088/messages/${remove}`, {
            method: "DELETE"
        })

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