
const authInjectDOM = {
    clearContainers: () => {
        document.querySelector("#tasksContainer").innerHTML = "";
        document.querySelector("#newsContainer").innerHTML = "";
        document.querySelector("#messagesContainer").innerHTML = "";
        document.querySelector("#authContainer").innerHTML = "";
        document.querySelector("#friendsContainer").innerHTML = "";
        document.querySelector("#eventsContainer").innerHTML = "";
    }
}

export default authInjectDOM;