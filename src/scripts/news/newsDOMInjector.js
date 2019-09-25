/* This component deals with working with the DOM.
There are four methods, each of which you want to use like so:

newsDomInjector.inject(object, target) Object is the thing you want to put into Target's InnerHTML.

newsDomInjector.set(object, target) Object is the thing you want to replace Target's InnerHTML.

newsDomInjector.erase(target) Target's InnerHtml will be erased.

newsDomInjector.replace(before, after) Before is going to replace After.



*/

let newsDomInjector = {
    inject: function (object, target) {
        document.querySelector(`${target}`).innerHTML += object;
    },

    set: function (object, target) {
        document.querySelector(`${target}`).innerHTML = object;
    },

    erase: function (target) {
        document.querySelector(`${target}`).innerHTML = "";
    },
    replace: function (before, after) {
        document.querySelector(`${before}`).outerHTML = after;
    }

}

export default newsDomInjector;