import newsApi from "./newsAPImanager.js";


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

                let submitData = {
                    date: document.querySelector("#newsDate").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#newsTitle").value,
                    summary: document.querySelector("#newsSummary").value,
                    url: document.querySelector("#newsUrl").value,

                }

                newsApi.saveEntry(submitData).then(function(uselessdata) {newsApi.getEntries().then(data => newsProcessor.handleNews(data))});
                //note to self: .then(randomvarname => unrelatedfunction(lol)) does not work, have to use
                // .then(function(randomvarname) {unrelatedfunction(lol)}) instead. Put this in the capstone site's data.

                //newsDomInjector.inject(newsComponentMaker.makeUneditableNewsArticle(submitData) ,"#newsSection");

            } else {

                let submitData = {
                    date: document.querySelector("#newsDate").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#newsTitle").value,
                    summary: document.querySelector("#newsSummary").value,
                    url: document.querySelector("#newsUrl").value,
                    id: document.querySelector("#idEdit").value

                }

                let savedId = document.querySelector("#idEdit").value;

                document.querySelector(".newsIdentifier").innerHTML = "New News Entry"; // set the headline to tell user that they are no longer editing
                document.querySelector("#newsSubmit").innerHTML = "Submit"; // set the save button's text to reflect the no longer editing state
                document.querySelector("#idEdit").value = "";

                newsApi.editEntry(submitData, savedId).then(function(uselessdata) {newsApi.getEntries().then(data => newsProcessor.handleNews(data))});

                //newsDomInjector.replace(`#section${savedId}`,newsComponentMaker.makeUneditableNewsArticle(submitData));


            }


        })

    },


    makeModularButtons: function () {


        let delList = document.querySelectorAll(".newsDelete");
        console.log(delList);
        let editList = document.querySelectorAll(".newsEdit");
        console.log(editList);

        for (let i = 0; i < delList.length; i++) {

            delList[i].addEventListener("click", event => {

                console.log("Deleting:");
                console.log(delList[i].value);

                newsApi.removeEntry(delList[i].value).then(function(uselessdata) {newsApi.getEntries().then(data => newsProcessor.handleNews(data))})




            })

            editList[i].addEventListener("click", event => {

                if (sessionStorage.getItem("activeUser") === editList[i].value) {
                    this.editEntry(delList[i].value);
                }


            })

        }





    },

    editEntry: function (id) {
        //value in the results                             targeting the container to be injected into the form//
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

