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
            let target = newsComponentMaker.makeNewsArticle(list[i]);
            console.log("Target:");
            console.log(document.querySelector("#newsSection"));
            newsDomInjector.inject(target, "#newsSection");
            console.log(target);
        }

    }

}






export default newsProcessor;