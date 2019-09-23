const navComponentMaker = {
    makeNavBar: function () {
        return `
      <button type="button" id="homeNavbutton">HOME</button>
      <button type="button" id="taskNavbutton">TASKS</button>
      <button type="button" id="messagesNavbutton">MESSAGES</button>
      <button type="button" id="eventsNavbutton">EVENTS</button>
      <button type="button" id="friendsNavbutton">FRIENDS</button>
      <button type="button" id="logoutNavbutton">LOGOUT</button>
        `
},
    makeSignUp: function() {
        return `
        <form>
        <fieldset>
            <label for="userEmail">Email:</label>
                <input type="text" id="userEmail" placeholder="please enter your email">
            <label for="password">Password:</label>
                <input type="password" id="password" placeholder="please enter a valid password" autocomplete="on">
            <label for="passwordConfirm">Re-Enter Password:</label>
                <input type="password" id="passwordConfirm" placeholder="please confirm your password" autocomplete="on">
            <button class="submit" id="signUpButton" type="button">Sign Up!</button>
        </fieldset>
        </form>`
    },
    makeLogin: function() {
        return `
        <form>
        <fieldset>
            <label for="userEmail">Email:</label>
                <input type="text" id="loginUserEmail" placeholder="please enter your email">
            <label for="password">Password:</label>
                <input type="password" id="loginPassword" placeholder="please enter a valid password" autocomplete="on">
            <button id="loginButton" type="button">Login</button>
        </fieldset>
    </form>`
    },
    makeLandingPage: function() {
        return `
        <h2>Welcome to Pet Life</h2>
        <h3>A place where you and other doggos can meet other doggos and fellow pet owners.</h3>
        <button id="landingSignUpButton" type="button">Sign up!</button>
        <button id="landingLoginButton" type="button">Login</button>
        `
    }
}

export default navComponentMaker;




















