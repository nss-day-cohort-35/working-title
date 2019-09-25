import newsApi from "./newsAPImanager";


import newsDomInjector from "./newsDomInjector";

import newsProcessor from "./newsProcessor";

import newsComponentMaker from "./newsWebComponent";


let newsListeners = {

    makeButtons: function () {
        document.querySelector("#newsSubmit").addEventListener("click", function (e) {

            e.preventDefault();

            console.log("Submitting");
            if (document.querySelector("#idEdit").value === "") {
                // this checks if the storage for the editing id is empty, plus if the fecth is done (becuase of bug)

                console.log("Saving!");

                // this is for new entries
                let sumbitdata = {
                    date: document.querySelector("#newsDate").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#newsTitle").value,
                    summary: document.querySelector("#newsSummary").value,
                    url: document.querySelector("#newsUrl").value,

                }

                newsApi.saveEntry(sumbitdata).then(function (uselessdata) { newsApi.getEntries().then(data => newsProcessor.handleNews(data)) });
                //note to self: .then(randomvarname => unrelatedfunction(lol)) does not work, have to use
                // .then(function(randomvarname) {unrelatedfunction(lol)}) instead. Put this in the capstone site's data.

                //newsDomInjector.inject(newsComponentMaker.makeUneditableNewsArticle(sumbitdata) ,"#newsSection");

            } else {

                console.log("Saving!");

                // this is for editing
                let sumbitdata = {
                    date: document.querySelector("#newsDate").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#newsTitle").value,
                    summary: document.querySelector("#newsSummary").value,
                    url: document.querySelector("#newsUrl").value,
                    id: document.querySelector("#idEdit").value

                }

                let savedid = document.querySelector("#idEdit").value;

                document.querySelector(".newsIdentifier").innerHTML = "New News Entry"; // set the headline to tell user that they are no longer editing
                document.querySelector("#newsSubmit").innerHTML = "Submit"; // set the save button's text to reflect the no longer editing state
                document.querySelector("#idEdit").value = "";

                newsApi.editEntry(sumbitdata, savedid).then(function (uselessdata) { newsApi.getEntries().then(data => newsProcessor.handleNews(data)) });



                //newsDomInjector.replace(`#section${savedid}`,newsComponentMaker.makeUneditableNewsArticle(sumbitdata));


            }


        })

    },


    makeModularButtons: function () {


        let dellist = document.querySelectorAll(".newsDelete");
        console.log(dellist);
        let editlist = document.querySelectorAll(".newsEdit");
        console.log(editlist);

        for (let i = 0; i < dellist.length; i++) {

            dellist[i].addEventListener("click", event => {

                console.log("Deleting:");
                console.log(dellist[i].value);

                newsApi.removeEntry(dellist[i].value).then(function (uselessdata) { newsApi.getEntries().then(data => newsProcessor.handleNews(data)) })




            })

            editlist[i].addEventListener("click", event => {

                if (sessionStorage.getItem("activeUser") === editlist[i].value) {
                    this.editEntry(dellist[i].value);
                }


            })

        }





    },

    editEntry: function (id) {

        document.querySelector("#newsDate").value = document.querySelector(`#newsDate${id}`).innerHTML;
        document.querySelector("#newsTitle").value = document.querySelector(`#newsTitle${id}`).innerHTML;
        document.querySelector("#newsSummary").value = document.querySelector(`#newsSummary${id}`).innerHTML;
        document.querySelector("#newsUrl").value = document.querySelector(`#newsUrl${id}`).innerHTML;

        document.querySelector("#idEdit").value = id; // set hidden value to store if of what is being edited
        document.querySelector(".newsIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
        document.querySelector("#newsSubmit").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state
    }


}

export default newsListeners;

