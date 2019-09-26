const tasksWebComponent = {
    makeTaskInputForm: () => {
        return `
        <form id="task-form">
        <h3>New Task</h3>
            <fieldset>
                <label for="taskDate">Expected Completion Date</label>
                <input type="date" name="taskDueDate" id="tasks-date-input" required>
            </fieldset>
            <fieldset>
                <label for="taskName">Task Name</label>
                <input type="text" name="taskName" id="tasks-name-input" required>
            </fieldset>
            <fieldset>
                <button type="button" id="tasks-submit-button">Submit Task</button>
                <input type="hidden" id="tasks-hidden-input" value="" />
            </fieldset>
        </form>
        <section id="tasks-results-container"></section>
        `
    },
    makeTaskResults: (task) => {
        console.log("Make Task Results have been called");
        return `
        <section>
            <div>
                <h3>${task.name}</h3>
            </div>
            <p>Expected Completion Date: ${task.date}</p>
            <fieldset>
                <label for="taskComplete">Click if task is complete</label>
                <input type="checkbox" name="taskComplete" id="tasks-complete-checkbox" value="${task.complete}">
            </fieldset>
            <button type="button" id="delete-task--${task.id}">Delete Task</button>
            <button type="button" id="edit-task--${task.id}">Edit Task</button>
        </section>
        `
    }
}

export default tasksWebComponent;