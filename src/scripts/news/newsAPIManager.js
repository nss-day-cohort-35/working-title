/* 
This is newsApi, it deals with working with the database. All the methods here return a promise.
There are four methods, each of which you want to use like so:

newsApi.saveEntry(entry) Saves a new news entry to the database. It takes the entire news entry as it's argument.

newsApi.getEntries() Gets all news entries, parses them, and returns them in an array.

newsApi.removeEntry(remove) This removes the news entry with a id of whatever "remove" is from the database.

news.editEntry(entry, id) This replaces the news entry in the database that an id of whatever
the argument "id" was, with "entry". 

*/

let newsApiManager = {

    saveEntry: function (entry) {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })

    },

    getEntries: function () {
        console.log("Getting entries");
        return fetch("http://localhost:8088/news").then(response => response.json())
    },

    removeEntry: function (remove) {

        return fetch(`http://localhost:8088/news/${remove}`, {
            method: "DELETE"
        })

    },

    editEntry: function (entry, id) {

        return fetch(`http://localhost:8088/news/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}

export default newsApiManager;