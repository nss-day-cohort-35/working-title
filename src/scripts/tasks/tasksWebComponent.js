const taskComponentMaker = {
    makeTaskSection: function () {
        return `
        <form id="task-form">
        <h3 class="taskIdentifier">New Task</h3>
            <fieldset>
                <label for="taskDate">Expected Completion Date</label>
                <input type="date" name="taskDueDate" id="taskDueDate" required>
            </fieldset>
            <fieldset>
                <label for="taskName">Task Name</label>
                <input type="text" name="taskName" id="taskName" required>
            </fieldset>
            <fieldset class="inline">
                <button type="button" id="taskSubmit">Submit Task</button>
                <input type="hidden" id="taskIdEdit" value="" />
            </fieldset>
        </form>
        <article id="taskResultSection"></article>
        `
    },
    makeTaskResults: function (task) {
        console.log("Make Task Results have been called");
        return `
        <section id="tasksResultContainer">
            <div id="editTask--${task.id}">
                <h3>${task.name}</h3>
            </div>
            <p>${task.date}</p>
            <fieldset>
                <label for="taskComplete">Click if task is complete</label>
                <input type="checkbox" name="taskComplete" id="taskComplete" value="${task.complete}">
            </fieldset>
            <button type="button" id="deleteTask--${task.id}">Delete Task</button>
            <button type="button" id="editTask--${task.id}">Edit Task</button>
        </section>
        `
    }
}

export default taskComponentMaker;