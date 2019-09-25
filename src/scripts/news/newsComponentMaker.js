/*  This is newsComponentMaker. It makes html, sometimes from data received as parameters.
Everything that that is targeted in other files have ids or classes. The id and class
names are important as they are used by other code. Do not change them unless you talk with the team.
This module only returns things, and does not edit anything directly.

newsComponentMaker.makeNewsSection() It should only be called once. Makes a input form for the new area of the site.
All the input fields have unique ids.

newsComponentMaker.makeNewsArticle(object) This makes a html element with the object passed to it. The object must be
formated correctly.



*/

const newsComponentMaker = {
    makeNewsSection: function () {
        return `
        <form id="news-form">
        <h3 class="newsIdentifier">New News Entry</h3>
        <fieldset>
            <label for="newsDate">Date of entry</label>
            <input type="date" name="newsDate" id="news-date-input" required>
        </fieldset>
        <fieldset>
            <label for="newsTitle">Title</label>
            <input type="text" name="newsTitle" id="news-title-input" required>
        </fieldset>
        <fieldset>
            <label for="newsSummary">Summary</label>
            <input type="textarea" name="newsSummary" id="news-summary-input" required>
        </fieldset>
        <fieldset>
            <label for="newsUrl">Url link</label>
            <input type="text" name="newsUrl" id="news-url-input">
        </fieldset>
       
        <fieldset class="inline">

            <button id="news-submit-button">Submit</button>
            <input type="hidden" id="news-id-edit-value" value="" />


        </fieldset>
    </form>

    <article id = "news-section">
    </article>
        
        `;
    },

    makeNewsArticle: function (object) {
        return `<section id="section--${object.id}">
        <input type="hidden" class="newsIdHolder" value="${object.id}" />
        <input type="hidden" class="newsuserIdHolder" value="${object.userId}" />
        <div class="inline"><h4 id="news-title--${object.id}" class = "margin">${object.title}</h4> <h5 id="news-date--${object.id}">${object.date}</h5></div>
        <p id = "news-summary--${object.id}">${object.summary}</p>
        <a href="${object.url}"><p id="news-url--${object.id}">${object.url}</p></a>
        <div><button class="newsDeleteButton margin" value="${object.id}">Delete</button><button class="newsEditButton" value="${object.userId}">Edit</button></div>
        </section> 
        
        `;
    }

}

export default newsComponentMaker;
