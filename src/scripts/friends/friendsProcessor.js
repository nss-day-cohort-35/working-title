import friendsComponentMaker from "./friendsWebComponent";
import friendsApi from "./friendsAPImanager";
import friendsDomInjector from "./friendsDOMInjector";
import friendsListeners from "./friendsEventListeners";

let friendsProcessor = {

    start: function () {
        friendsDomInjector.set(friendsComponentMaker.makefriendsSection(), "#friendsContainer");
        friendsListeners.makeButtons();
        friendsApi.getEntries().then(entries => this.handlefriends(entries));

    },

    handlefriends: function (list) {

        console.log("Processing this list:");
        console.log(list);

        friendsDomInjector.erase("#friendsSection");

        let userid = sessionStorage.getItem("activeUser");

        if (userid === null) {
            sessionStorage.setItem("activeUser", 1);
            userid = sessionStorage.getItem("activeUser");
        }

        for (let i = 0; i < list.length; i++) {

            if (list[i].userId.toString() === userid.toString()) {//activeUser is the key
                let object = friendsComponentMaker.makefriendsArticle(list[i]);

                // friendsDomInjector.inject(Thing you want to insert, Where you want to insert it into)
                friendsDomInjector.inject(object, "#friendsSection");
            }//this space is reserved for checking all freind objects and populating as if it's from the usser


        }

        friendsListeners.makeModularButtons();
        


    }

}






export default friendsProcessor;