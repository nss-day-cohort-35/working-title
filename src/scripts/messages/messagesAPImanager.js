
const url = "http://localhost:8088";

const messagesAPIManager = {

    saveMessage: (message) => {
        return fetch(`${url}/messages`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(message)
        })
    },
    getFriends: (userId) => {
        return fetch(`${url}/friends/?currentUserId=${userId}&_expand=user`)
            .then(r => r.json())
    },
    postCreateFriendship: (friendship) => {
        return fetch(`${url}/friends`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(friendship)
        })
    },
    getMessages: () => {
        return fetch(`${url}/messages?_expand=user`)
            .then(r => r.json())
    },
    deleteMessage: (Id) => {
        return fetch(`${url}/messages/${Id}`, {
            method: "DELETE"
        })
    },
    editMessage: (message, Id) => {
        return fetch(`${url}/messages/${Id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(message)
        })
    }
}


export default messagesAPIManager;