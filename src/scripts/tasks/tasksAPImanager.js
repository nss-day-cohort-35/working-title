const tasksApi = {
    getTask: () => {
        return fetch("http://localhost:8088/tasks?_sort=date&_order=desc")
            .then(response =>
                response.json()
            );
    },
    saveTask: task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
    },
    deleteTask: id => {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    editTask: id => {
        // const taskUpdateObj = {
        //     name: document.querySelector("#tasksResultContainer").value
        // }
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PATCH",
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

export default tasksApi;