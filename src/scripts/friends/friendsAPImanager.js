let friendsApi = {

    saveEntry: function (entry) {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })

    },

    getEntries: function () {
        console.log("Getting entries");
        return fetch("http://localhost:8088/friends").then(entrieslist => entrieslist.json())
    },

    removeEntry: function (remove) {

        return fetch(`http://localhost:8088/friends/${remove}`, {
            method: "DELETE"
        })

    },

    editEntry: function (entry, id) {

        return fetch(`http://localhost:8088/friends/${id}`, {
            method: "PUT",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default friendsApi;