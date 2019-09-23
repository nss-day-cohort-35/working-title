import createUserObj from "./authEventListeners";
import API from "./authAPImanager";
import navComponentMaker from "./authWebComponent";
import authInjectDOM from "./authDOMInjector";

const authProcessor = {
    signUp: () => {
        console.log("Sign Up function is running")
        let message = "Welcome Puppy Pals, Kitty Kin, and Feathered Friends"
        document.querySelector("#authContainer").innerHTML = `<h1>${message}</h1>
    <form>
        <fieldset>
            <label for="userEmail">Email:</label>
                <input type="text" id="userEmail" placeholder="please enter your email">
            <label for="password">Password:</label>
                <input type="password" id="password" placeholder="please enter a valid password" autocomplete="on">
            <label for="passwordConfirm">Re-Enter Password:</label>
                <input type="password" id="passwordConfirm" placeholder="please re-enter your password" autocomplete="on">
            <button class="submit" type="button">Sign Up!</button>
            <button class="loginButton" type="button">Login</button>
        </fieldset>
    </form>
    `
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
                    document.querySelector("#authContainer").innerHTML += `<h2> Welcome to the website ${newUserObj.userEmail}</h2>`
                })

            }
        })
    },
    Login: () => {
        console.log("Login function has been called")
        document.querySelector("#loginButton").addEventListener("click", event => {
            console.log("PLACEHOLDER")
    })},
    Landing: () => {
                console.log("landing page has been called")
                authInjectDOM.addLandingtoDOM();
            }
}
export default authProcessor;