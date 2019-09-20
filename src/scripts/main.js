import authProcessor from "./auth/authProcessor";

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
// import tasksProcessor from "./tasks/tasksProcessor";
// import newsProcessor from "./news/newsProcessor";
// import messagesProcessor from "./messages/messagesProcessor";
// import friendsProcessor from "./friends/friendsProcessor";
// import authProcessor from "./auth/authProcessor";
// import eventsProcessor from "./events/eventsProcessor";

authProcessor.Login()
//     console.log("This is running")
// let message =  "Welcome Puppy Pals, Kitty Kin, and Feathered Friends"
// document.querySelector("#authContainer").innerHTML = `<h1>${message}</h1>
// <form>
//     <fieldset>
//         <label for="userEmail">Email:</label>
//             <input type="text" id="userEmail" placeholder="please enter your email">
//         <label for="password">Password:</label>
//             <input type="password" id="password" placeholder="please enter a valid password" autocomplete="on">
//         <label for="passwordConfirm">Re-Enter Password:</label>
//             <input type="password" id="passwordConfirm" placeholder="please re-enter your password" autocomplete="on">
//         <button class="submit" type="button">Sign Up!</button>
//     </fieldset>
// </form>
// `
// //This is the submit button event listener that checks for passwords//
// document.querySelector(".submit").addEventListener("click", event => {
//     // we are checking the value of the name label
//     // we are checking the value of the username label
//     let userEmail = document.querySelector("#userEmail").value;
//     let password = document.querySelector("#password").value;
//     let passwordConfirm = document.querySelector("#passwordConfirm").value;
//     // starting the if statement
//     if (password !== passwordConfirm) {
//         // if pass isn't equal to passConfirm
//         alert("Please make sure  use the same password")
//         // if both password fields are empty
//     } else if (password === "" || passwordConfirm === "") {
//         alert("Please fill the Password Form")
//     } else if (userEmail === "") {
//         alert("Please enter a valid email address")
//     } else {
//         // newUser will crete an object with the email, password value
//         let newUser = createUserObj(userEmail, password);
//         API.createUser(newUser).then((user) => {  // response it's a placeholder to call the "users" from JSON database


//             sessionStorage.setItem("activeUser", user.id)
//             //setItem defines the activeUser within the id number belonging to it, from the JSON database.

//             document.querySelector("#welcome").innerHTML = `<h2> Welcome in the website ${newUser.name}</h2>`
//         })

//     }
// })