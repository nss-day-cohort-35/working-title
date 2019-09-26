// This is the page that will call the API calls for the authentication

const authAPIManager = {
    createUser(user) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then (Response => Response.json())
    },
    getSpecificUser: (id) => {
        return fetch(`http://localhost:8088/users/${id}`)
            .then(response => response.json())
    },
    getUserbyEmail: (userEmail) => {
        return fetch(`http://localhost:8088/users?userEmail=${userEmail}`)
        .then(response => response.json())
    }
}

export default authAPIManager;