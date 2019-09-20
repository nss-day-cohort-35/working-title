let newsApi = {

    saveEntry: function () {
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
        return fetch("http://localhost:8088/news").then(entrieslist => entrieslist.json())
    }
}

export default newsApi;