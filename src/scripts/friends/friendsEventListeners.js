

import friendsProcessor from "./friendsProcessor";


let friendsListeners = {

    makeButtons: function () {
        document.querySelector("#friendsSubmit").addEventListener("click", function (e) {

            e.preventDefault();

            let sumbitdata = {

                userId: sessionStorage.getItem("activeUser")

            }

            friendsApiManager.saveEntry(sumbitdata)
                .then(() => friendsApiManager.getEntries())
                .then(data => friendsProcessor.handleFriends(data))

        })

    },


    makeModularButtons: function () {


        let dellist = document.querySelectorAll(".friendsDelete");

        for (let i = 0; i < dellist.length; i++) {

            dellist[i].addEventListener("click", event => {

                friendsApiManager.removeEntry(delblist[i].value)
                    .then(() => friendsApiManager.getEntries())
                    .then(data => friendsProcessor.handleFriends(data))


            })

        }
    }

}

export default friendsListeners;

