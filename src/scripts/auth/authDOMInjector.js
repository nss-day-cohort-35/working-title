import navComponentMaker from "./authWebComponent.js"

const authDOMInjector = {
    clearContainers: () => {
        document.querySelector("#tasks-container").innerHTML = "";
        document.querySelector("#news-container").innerHTML = "";
        document.querySelector("#messages-container").innerHTML = "";
        document.querySelector("#auth-container").innerHTML = "";
        document.querySelector("#friends-container").innerHTML = "";
        document.querySelector("#events-container").innerHTML = "";
        document.querySelector("#landing-container").innerHTML = "";
    },
    //this takes the buttons we created in authWebComponent and injects them to the #nav-container//
    //we will need this to be wrapped in an if statement on main.js or authProcessor//
    addNavtoDOM: () => {
        const navContainer = document.querySelector("#nav-container")
        navContainer.innerHTML = navComponentMaker.makeNavBar();
    },
    addLandingtoDOM: () => {
         let landingContainer = document.querySelector("#landing-container")
         console.log(landingContainer)
         landingContainer.innerHTML = navComponentMaker.makeLandingPage();
    },
    addSignUptoDOM: () => {
        let signUpContainer = document.querySelector("#auth-container")
        console.log(signUpContainer)
        signUpContainer.innerHTML += navComponentMaker.makeSignUp();
    },
    addLogintoDOM: () => {
        let loginContainer = document.querySelector("#auth-container")
        console.log(loginContainer)
        loginContainer.innerHTML += navComponentMaker.makeLogin();
    }
}
// const taskContainer = document.querySelector("#taskSection");
//             taskContainer.innerHTML += taskComponentMaker.makeTaskResults(task);

export default authDOMInjector;