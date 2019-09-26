

let friendsDomInjector = {
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

export default friendsDomInjector;