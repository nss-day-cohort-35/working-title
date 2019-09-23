import navComponentMaker from "./authWebComponent"

const authInjectDOM = {
    clearContainers: () => {
        document.querySelector("#tasksContainer").innerHTML = "";
        document.querySelector("#newsContainer").innerHTML = "";
        document.querySelector("#messagesContainer").innerHTML = "";
        document.querySelector("#authContainer").innerHTML = "";
        document.querySelector("#friendsContainer").innerHTML = "";
        document.querySelector("#eventsContainer").innerHTML = "";
    },
    //this takes the buttons we created in authWebComponent and injects them to the #navContainer//
    //we will need this to be wrapped in an if statement on main.js or authProcessor//
    addNavtoDOM: () => {
        const navContainer = document.querySelector("#navContainer")
        navContainer.innerHTML = navComponentMaker.makeNavBar();
    }
}


// const taskContainer = document.querySelector("#taskSection");
//             taskContainer.innerHTML += taskComponentMaker.makeTaskResults(task);

export default authInjectDOM;