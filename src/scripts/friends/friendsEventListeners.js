import friendsApi from "./friendsAPImanager";


import friendsDomInjector from "./friendsDomInjector";

import friendsProcessor from "./friendsProcessor";

import friendsComponentMaker from "./friendsWebComponent";


let friendsListeners = {

    makeButtons: function () {
        document.querySelector("#friendsSubmit").addEventListener("click", function (e) {

            e.preventDefault();

          
            
                // this checks if the storage for the editing id is empty, plus if the fecth is done (becuase of bug)

             

                // this is for new entries
                let sumbitdata = {
                    
                    userId: sessionStorage.getItem("activeUser")

                }

                friendsApi.saveEntry(sumbitdata).then(function () { friendsApi.getEntries().then(data => friendsProcessor.handlefriends(data)) });
                //note to self: .then(randomvarname => unrelatedfunction(lol)) does not work, have to use
                // .then(function(randomvarname) {unrelatedfunction(lol)}) instead. Put this in the capstone site's data.

                //friendsDomInjector.inject(friendsComponentMaker.makeUneditablefriendsArticle(sumbitdata) ,"#friendsSection");

            


        })

    },


    makeModularButtons: function () {


        let dellist = document.querySelectorAll(".friendsDelete");
        console.log(dellist);

        for (let i = 0; i < dellist.length; i++) {

            dellist[i].addEventListener("click", event => {

                console.log("Deleting:");
                console.log(dellist[i].value);

                friendsApi.removeEntry(dellist[i].value).then(function (uselessdata) { friendsApi.getEntries().then(data => friendsProcessor.handlefriends(data)) })


            })

        }
    }

}

export default friendsListeners;

