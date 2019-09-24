import createUserObj from "./authEventListeners.js";
import API from "./authAPImanager.js";
import navComponentMaker from "./authWebComponent.js";
import authInjectDOM from "./authDOMInjector.js";
import newsProcessor from "../news/newsProcessor.js";
import navControls from "../main.js";

const authProcessor = {
    signUp: () => {
        console.log("Sign Up function is running")
        let message = "Welcome Puppy Pals, Kitty Kin, and Feathered Friends"
        document.querySelector("#authContainer").innerHTML += `<h1>${message}</h1>`
        authInjectDOM.addSignUptoDOM(navComponentMaker.makeSignUp());
        //This is the submit button event listener that checks for passwords//
        document.querySelector("#signUpButton").addEventListener("click", event => {
            // we are checking the value of the name label
            // we are checking the value of the username label
            let userEmail = document.querySelector("#userEmail").value;
            let password = document.querySelector("#password").value;
            let passwordConfirm = document.querySelector("#passwordConfirm").value;
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
                API.createUser(newUserObj).then((user) => {  // response it's a placeholder to call the "users" from JSON database
                    sessionStorage.setItem("activeUser", user.id)
                    //setItem defines the activeUser within the id number belonging to it, from the JSON database and stores it as sessionToken to be used elsewhere//
                    let sessionToken = sessionStorage.getItem("activeUser");
                    console.log("Session Token for current logged in user is:" + sessionToken);
                    authInjectDOM.addNavtoDOM();
                    navControls.enableNavButtons();
                    document.querySelector("#authContainer").innerHTML = `<h2> Welcome to the website ${newUserObj.userEmail}</h2>`
                    newsProcessor.start();
                })

            }
        })
    },
    Login: () => {
        console.log("Login function has been called")
        authInjectDOM.addLogintoDOM()
        document.querySelector("#loginButton").addEventListener("click", event => {
            document.querySelector("#landingContainer").innerHTML = ""
            let userEmail = document.querySelector("#loginUserEmail").value;
            let userPassword = document.querySelector("#loginPassword").value;
            API.getUserbyEmail(userEmail)
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
                        authInjectDOM.addNavtoDOM();
                        navControls.enableNavButtons();
                        document.querySelector("#authContainer").innerHTML = `<h2> Welcome to the website ${response[0].userEmail}</h2>`
                        newsProcessor.start();
                    }
                })

        }
        )
    },
    Landing: () => {
        console.log("landing page has been called")
        authInjectDOM.addLandingtoDOM();
        document.querySelector("#landingSignUpButton").addEventListener("click", event => {
            document.querySelector("#landingContainer").innerHTML = "";
            authProcessor.signUp();
        })
        document.querySelector("#landingLoginButton").addEventListener("click", event => {
            document.querySelector("#landingContainer").innerHTML = "";
            authProcessor.Login();
        })
    }
}
export default authProcessor;