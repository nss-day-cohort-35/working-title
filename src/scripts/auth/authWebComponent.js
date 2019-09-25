const navComponentMaker = {
    makeNavBar: function () {
        return `
      <button type="button" id="home-nav-button">HOME</button>
      <button type="button" id="tasks-nav-button">TASKS</button>
      <button type="button" id="messages-nav-button">MESSAGES</button>
      <button type="button" id="events-nav-button">EVENTS</button>
      <button type="button" id="friends-nav-button">FRIENDS</button>
      <button type="button" id="logout-nav-button">LOGOUT</button>
        `
},
    makeSignUp: function() {
        return `
        <form>
        <fieldset>
            <label for="userEmail">Email:</label>
                <input type="text" id="user-email" placeholder="please enter your email">
            <label for="password">Password:</label>
                <input type="password" id="password" placeholder="please enter a valid password" autocomplete="on">
            <label for="passwordConfirm">Re-Enter Password:</label>
                <input type="password" id="password-confirm" placeholder="please confirm your password" autocomplete="on">
            <button class="submit" id="signup-button" type="button">Sign Up!</button>
        </fieldset>
        </form>`
    },
    makeLogin: function() {
        return `
        <form>
        <fieldset>
            <label for="userEmail">Email:</label>
                <input type="text" id="login-user-email" placeholder="please enter your email">
            <label for="password">Password:</label>
                <input type="password" id="login-password" placeholder="please enter a valid password" autocomplete="on">
            <button id="login-button" type="button">Login</button>
        </fieldset>
    </form>`
    },
    makeLandingPage: function() {
        return `
        <h2>Welcome to Pet Life</h2>
        <h3>A place where you and other doggos can meet other doggos and fellow pet owners.</h3>
        <button id="landing-signup-button" type="button">Sign up!</button>
        <button id="landing-login-button" type="button">Login</button>
        `
    }
}

export default navComponentMaker;




















