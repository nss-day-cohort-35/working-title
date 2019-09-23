import newsComponentMaker from "./newsWebComponent";
import newsApi from "./newsAPImanager";
import newsDomInjector from "./newsDOMInjector";

let newsProcessor = {

    start: function () {
        newsDomInjector.set(newsComponentMaker.makeNewsSection(), "#newsContainer");
        newsApi.getEntries().then(entries => this.handleNews(entries));

    },

    handleNews: function (list) {
        console.log(list);

        for (let i = 0; i < list.length; i++) {

            usserid = sessionStorage.getItem("activeUser");

            if(list[i].userId === usserid) {//activeUser is the key
            let target = newsComponentMaker.makeNewsArticle(list[i]);
            console.log("Target:");
            console.log(document.querySelector("#newsSection"));
            newsDomInjector.inject(target, "#newsSection");
            console.log(target);
            }//this space is reserved for checking all freind objects and populating as if it's from the usser
        }

    }

}






export default newsProcessor;