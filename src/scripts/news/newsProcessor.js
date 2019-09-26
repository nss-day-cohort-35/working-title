import newsComponentMaker from "./newsWebComponent.js";
import newsApi from "./newsAPImanager.js";
import newsDomInjector from "./newsDOMInjector.js";
import newsListeners from "./newsEventListeners.js";

let newsProcessor = {

    start: function () {
        newsDomInjector.set(newsComponentMaker.makeNewsSection(), "#newsContainer");
        newsListeners.makeButtons();
        newsApi.getEntries().then(entries => this.handleNews(entries));

    },

    handleNews: function (list) {

        console.log("Processing this list:");
        console.log(list);

        newsDomInjector.erase("#newsSection");

        let userid = sessionStorage.getItem("activeUser");

        if (userid === null) {
            sessionStorage.setItem("activeUser", 1);
            userid = sessionStorage.getItem("activeUser");
        }

        console.log("active usser:");
        console.log(sessionStorage.getItem("activeUser"));

        for (let i = 0; i < list.length; i++) {

            if (list[i].userId.toString() === userid.toString()) {//activeUser is the key
                let object = newsComponentMaker.makeNewsArticle(list[i]);

                // newsDomInjector.inject(Thing you want to insert, Where you want to insert it into)
                newsDomInjector.inject(object, "#newsSection");
            }//this space is reserved for checking all freind objects and populating as if it's from the usser


        }

        newsListeners.makeModularButtons();
        


    }

}






export default newsProcessor;