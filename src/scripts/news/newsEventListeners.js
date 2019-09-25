import newsApi from "./newsAPIManager";




import newsProcessor from "./newsProcessor";
import newsApiManager from "./newsAPIManager";

/* This component deals with giving elements functionality.
There are three methods, each of which you want to use like so:

newsListeners.MakeButtonListeners() Call this only once, when the initial page has been loaded.
It adds functionality to the Submit button, while also removing the default functionality of a button in a form. (#1)
It functions like a New Entry button and calls the method to save a new entry when it does not have a
id stored in the "news-id-edit-value" location. When it does, it inputs the correct id into the object, then calls the
method to save changes to an existing object. It then reverts all the changes made via editing back to normal. (#2)

newsListeners.makeModularButtonListeners() Call this when the news feed changes. This gives functionality to the Edit and Delete
Buttons found on the news elements. The function uses a loop (#3) to find all relevant buttons. Since Edit and delete buttons always
come in pairs, delblist[3] will be the sibling of editblist[3] and so on. The delete button stores the Id for the
news component it is a part of, and the edit button stores the UserId of the user that created it.
The delete buttons passes the id of the news entry to be deleted to the Api handler, then it reloads the news entries. (#4)
The edit buttons call newsListeners.editEntry and pass it the ID of the news entry it is editing, gained from it's sibling
Delete Button's Value.

newsListeners.editEntry(id) Should not be called other than from newsListeners.makeModularButtonListeners(). This gets all the values
of the news entry that has the id that was entered into the function. It puts that data into the input form. It also changes the
input form to show that the user is editing a news entry. It also saves the id of the news entry in a hidden
input that is located inside the input form.


*/

let newsEventListeners = {

    makeButtonListeners: function () {
        document.querySelector("#news-submit-button").addEventListener("click", function (event) {

            event.preventDefault(); // #1

            if (document.querySelector("#news-id-edit-value").value === "") {



                let sumbitdata = {
                    date: document.querySelector("#news-date-input").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#news-title-input").value,
                    summary: document.querySelector("#news-summary-input").value,
                    url: document.querySelector("#news-url-input").value,

                }


                newsApi.saveEntry(sumbitdata)
                    .then(() => newsApiManager.getEntries())
                    .then(data => newsProcessor.handleNews(data))

            } else {

                let sumbitdata = {
                    date: document.querySelector("#news-date-input").value,
                    userId: sessionStorage.getItem("activeUser"),
                    title: document.querySelector("#news-title-input").value,
                    summary: document.querySelector("#news-summary-input").value,
                    url: document.querySelector("#news-url-input").value,
                    id: document.querySelector("#news-id-edit-value").value

                }

                let savedid = document.querySelector("#news-id-edit-value").value;

                document.querySelector(".newsIdentifier").innerHTML = "New News Entry";
                document.querySelector("#news-submit-button").innerHTML = "Submit"; // #2
                document.querySelector("#news-id-edit-value").value = "";

                newsApi.editEntry(sumbitdata, savedid)
                    .then(() => newsApiManager.getEntries())
                    .then(data => newsProcessor.handleNews(data))




            }


        })

    },


    makeModularButtonListeners: function () {


        let delblist = document.querySelectorAll(".newsDeleteButton");
        let editblist = document.querySelectorAll(".newsEditButton");

        for (let i = 0; i < delblist.length; i++) { // #3

            delblist[i].addEventListener("click", event => {

                newsApiManager.removeEntry(delblist[i].value) // #4
                    .then(() => newsApiManager.getEntries())
                    .then(data => newsProcessor.handleNews(data))




            })

            editblist[i].addEventListener("click", event => {

                if (sessionStorage.getItem("activeUser") === editblist[i].value) {
                    this.editEntry(delblist[i].value);
                }


            })

        }
    },

    editEntry: function (id) {

        document.querySelector("#news-date-input").value = document.querySelector(`#news-date--${id}`).innerHTML;
        document.querySelector("#news-title-input").value = document.querySelector(`#news-title--${id}`).innerHTML;
        document.querySelector("#news-summary-input").value = document.querySelector(`#news-summary--${id}`).innerHTML;
        document.querySelector("#news-url-input").value = document.querySelector(`#news-url--${id}`).innerHTML;

        document.querySelector("#news-id-edit-value").value = id; // set hidden value to store if of what is being edited
        document.querySelector(".newsIdentifier").innerHTML = "Edit News Entry"; // set the headline to tell user that they are editing
        document.querySelector("#news-submit-button").innerHTML = "Save Changes"; // set the save button's text to reflect the editing state
    }


}

export default newsEventListeners;

