import newsWebComponent from "./newsWebComponent";
import newsAPIManager from "./newsAPIManager";
import newsDomInjector from "./newsDOMInjector";
import newsEventListeners from "./newsEventListeners";

/*  This is newsProcessor. It manages and processes the other news - prefixed .js files. As such it has all of them
imported.

newsProcessor.start() Should only be called once. It makes the input form and puts it into it's assigned container (#1)
then adds functionality to the Submit Button with makeButtonListeners() (#2)
Then gets all the news entires and calls newsProcessor.handleNews with the parsed entries as the parameter. (#3)

newsProcessor.handleNews() Should be called every time there is a change to the news entries. It should always be passed the most
current array of entries. It first clears the current news section to make way for the new one (#4) It then gets the active
user's id from sessionstorage. If it can not find one, a default userid, 1, is used instead (#5).
It then loops through the entire list of news entries. It checks each one to make sure the current active user was the one
who made them by comparing the news entires userid to the current id (#6). If not, it loops without doing anything. If it is,
It passes the news entry to the Component Maker to get a modular html element, and then passes that element to the Dom Injector
to add it to stack of other journal entries contained in news-section (#7).
After making all of the news entries, newsListeners.makeModularButtonListeners() is called to give all of the newly created Delete and
Edit buttons functionality.

*/

let newsProcessor = {

    start: function () {
        newsDomInjector.set(newsWebComponent.makeNewsArticle(), "#news-container"); // #1
        newsEventListeners.makeButtonListeners(); // #2
        newsAPIManager.getEntries().then(entries => this.handleNews(entries)); // #3

    },

    handleNews: function (list) {

        newsDomInjector.erase("#news-section"); // #4

        let userid = sessionStorage.getItem("activeUser");

        if (userid === null) { // #5
            sessionStorage.setItem("activeUser", 1);
            userid = sessionStorage.getItem("activeUser");
        }


        for (let i = 0; i < list.length; i++) {

            if (list[i].userId.toString() === userid.toString()) { // #6

                let object = newsWebComponent.makeNewsArticle(list[i]);
                newsDomInjector.inject(object, "#news-section"); // #7

            }


        }

        newsEventListeners.makeModularButtonListeners(); // #8



    }

}






export default newsProcessor;