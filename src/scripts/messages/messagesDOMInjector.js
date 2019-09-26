/*This message component contains an object that holds four methods
messagesDomInjector is an object that manipulates the DOM for the messages module.#1 is a function that takes two arguments (the component it is being passed, and the HTML element being targeted), and appends the object to the container.#2 is same as above but it makes the html element equal to the object it is being passed, this will replace what is in it with the object argument.
#3 same as above but it does not take two arguments, only the target, since it is clearing the target container
#4  is a method that takes two arguments ('before' is the container you are targeting, 'after' is the element you are setting it to)
*/
let messagesDomInjector = {
    inject: function (object, target) {
        document.querySelector(`${target}`).innerHTML += object;
    },
    //#1
    set: function (object, target) {
        document.querySelector(`${target}`).innerHTML = object;
    },
    //#2
    erase: function (target) {
        document.querySelector(`${target}`).innerHTML = "";
    },
    //#3
    replace: function (before, after) {
        document.querySelector(`${before}`).outerHTML = after;
    }
    //#4
}

export default messagesDomInjector;