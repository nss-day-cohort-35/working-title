import createUserObj from "./authEventListeners.js";
import authAPIManager from "./authAPIManager.js";
import navComponentMaker from "./authWebComponent.js";
import authDOMInjector from "./authDOMInjector.js";
import newsProcessor from "../news/newsProcessor.js";
import navControls from "../main.js";

const authProcessor = {
    signUp: () => {
        console.log("Sign Up function is running")
        let message = "Welcome Puppy Pals, Kitty Kin, and Feathered Friends"
        document.querySelector("#auth-container").innerHTML += `<h1>${message}</h1>`
        authDOMInjector.addSignUptoDOM(navComponentMaker.makeSignUp());
        //This is the submit button event listener that checks for passwords//
        document.querySelector("#signup-button").addEventListener("click", event => {
            // we are checking the value of the name label
            // we are checking the value of the username label
            let userEmail = document.querySelector("#user-email").value;
            let password = document.querySelector("#password").value;
            let passwordConfirm = document.querySelector("#password-confirm").value;
            // starting the if statement
            if (password !== passwordConfirm) {
                // if pass isn't equal to passConfirm
                alert("Please make sure  use the same password")
                // if both password fields are empty
            } else if (password === "" || passwordConfirm === "") {
                alert("Please fill the Password Form")
            } else if (userEmail === "") {
                alert("Please enter a valid email address")
            } else {
                // newUser will create an object with the email, password value
                let newUserObj = createUserObj(userEmail, password);
                authAPIManager.createUser(newUserObj).then((user) => {  // response it's a placeholder to call the "users" from JSON database
                    sessionStorage.setItem("activeUser", user.id)
                    //setItem defines the activeUser within the id number belonging to it, from the JSON database and stores it as sessionToken to be used elsewhere//
                    let sessionToken = sessionStorage.getItem("activeUser");
                    console.log("Session Token for current logged in user is:" + sessionToken);
                    authDOMInjector.addNavtoDOM();
                    navControls.navButtonEventListener();
                    document.querySelector("#auth-container").innerHTML = `<h2> Welcome to the website ${newUserObj.userEmail}</h2>`
                    newsProcessor.start();
                })

            }
        })
    },
    login: () => {
        console.log("Login function has been called")
        authDOMInjector.addLogintoDOM()
        document.querySelector("#login-button").addEventListener("click", event => {
            document.querySelector("#landing-container").innerHTML = ""
            let userEmail = document.querySelector("#login-user-email").value;
            let userPassword = document.querySelector("#login-password").value;
            authAPIManager.getUserbyEmail(userEmail)
                .then(response => {
                    if (response.length === 0) {
                        alert("Please enter a valid User Email.")
                    } else if (response.length === 1 && response[0].password !== userPassword) {
                        alert("Password is incorrect, please try again.")
                        // starting the if statement to check for empty fields//
                    } else if (userPassword === "") {
                        alert("Please fill the Password Form")
                    } else if (userEmail === "") {
                        alert("Please enter a valid email address")
                    } else if (response[0].password === userPassword) {
                        sessionStorage.setItem("activeUser", response[0].id)
                        //setItem defines the activeUser within the id number belonging to it, from the JSON database and stores it as sessionToken to be used elsewhere//
                        let sessionToken = sessionStorage.getItem("activeUser");
                        console.log("Session Token for current logged in user is:" + sessionToken);
                        authDOMInjector.addNavtoDOM();
                        navControls.navButtonEventListener();
                        document.querySelector("#auth-container").innerHTML = `<h2> Welcome to the website ${response[0].userEmail}</h2>`
                        newsProcessor.start();
                    }
                })

        }
        )
    },
    landing: () => {
        console.log("landing page has been called")
        authDOMInjector.addLandingtoDOM();
        document.querySelector("#landing-signup-button").addEventListener("click", event => {
            document.querySelector("#landing-container").innerHTML = "";
            authProcessor.signUp();
        })
        document.querySelector("#landing-login-button").addEventListener("click", event => {
            document.querySelector("#landing-container").innerHTML = "";
            authProcessor.login();
        })
    }
}
export default authProcessor;