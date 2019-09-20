

let newsDomInjector = {
    inject: function (thing, target) {
        document.querySelector(`${target}`).innerHTML += thing;
    },

    set: function (thing, target) {
        document.querySelector(`${target}`).innerHTML = thing;
    },

    earase: function (target) {
        document.querySelector(`${target}`).innerHTML = "";
    }
}

export default newsDomInjector;