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
                <input type="submit" value="Submit" id="taskSubmit">
                <input type="reset">
                <input type="hidden" id="idedit" value="" />
            </fieldset>
        </form>
        <article id="taskSection"></article>
        `
    },
    makeTaskResults: function (task) {
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
        </section>
        `
    }
}

export default taskComponentMaker;