const tasksAPIManager = {
    getTask: userId => {
        return fetch(`http://localhost:8088/tasks/?userId=${userId}&_sort=date&_order=desc&_expand=user`)
            .then(response =>
                response.json()
            );
    },
    saveTask: task => {
        //don't need to find ID because it's being called in session storage in the array.
        return fetch("http://localhost:8088/tasks?_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
    },
    deleteTask: id => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    editTask: (id, taskUpdateObj) => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskUpdateObj)
        }).then(response => response.json())
    },
    getSpecificTask: (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(response => response.json())
    }
};

export default tasksAPIManager;