import friendsComponentMaker from "./friendsWebComponent";
import friendsApi from "./friendsAPImanager";
import friendsDomInjector from "./friendsDOMInjector";
import friendsListeners from "./friendsEventListeners";



let friendsProcessor = {

    start: function () {
        friendsDomInjector.set(friendsComponentMaker.makeFriendsSection(), "#friendsContainer");
        friendsListeners.makeButtons();
        friendsApi.getEntries().then(entries => this.handleFriends(entries));

    },

    handleFriends: function (list) {

        friendsDomInjector.erase("#friends-section");

        let userid = sessionStorage.getItem("activeUser");

        if (userid === null) {
            sessionStorage.setItem("activeUser", 1);
            userid = sessionStorage.getItem("activeUser");
        }

        for (let i = 0; i < list.length; i++) {

            if (list[i].initiator.toString() === userid.toString()) {
                let object = friendsComponentMaker.makeFriendsArticle(list[i]);

                friendsDomInjector.inject(object, "#friends-section");
            }


        }

        friendsListeners.makeModularButtons();



    }

}






export default friendsProcessor;