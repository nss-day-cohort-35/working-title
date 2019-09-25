const newsComponentMaker = {
    makeNewsSection: function () {
        return `
        <form id="news-form">
        <h3 class = "newsIdentifier">New News Entry</h3>
        <fieldset>
            <label for="newsDate">Date of entry</label>
            <input type="date" name="newsDate" id="newsDate" required>
        </fieldset>
        <fieldset>
            <label for="newsTitle">Title</label>
            <input type="text" name="newsTitle" id="newsTitle">
        </fieldset>
        <fieldset>
            <label for="newsSummary">Summary</label>
            <input type="textarea" name="newsSummary" id="newsSummary" required>
        </fieldset>
        <fieldset>
            <label for="newsUrl">Url link</label>
            <input type="text" name="newsUrl" id="newsUrl">
        </fieldset>
       
        <fieldset class="inline">

            <button id="newsSubmit">Submit</button>
            <input type="reset" value="Reset"/>
            <input type="hidden" id="idEdit" value="" />


        </fieldset>
    </form>

    <article id = "newsSection">
    </article>
        
        `;
    },

    makeNewsArticle: function (object) {
        return `<section id="section${object.id}">
        <input type="hidden" class="newsIdHolder" value="${object.id}" />
        <input type="hidden" class="newsuserIdHolder" value="${object.userId}" />
        <div class="inline"><h4 id="newsTitle${object.id}" class = "margin">${object.title}</h4> <h5 id="newsDate${object.id}">${object.date}</h5></div>
        <p id = "newsSummary${object.id}">${object.summary}</p>
        <a href="${object.url}"><p id="newsUrl${object.id}">${object.url}</p></a>
        <div><button class="newsDelete margin" value="${object.id}">Delete</button><button class="newsEdit" value="${object.userId}">Edit</button></div>
        </section>
        
        `; // The delete button stores the id of the news, the edit button stores the id of the person. Since they itterate the same in a loop, i can easily call them both.
    },

    makeUneditableNewsArticle: function (object) {
        return `<section>
        <input type="hidden" class="newsIdHolder" value="" />
        <input type="hidden" class="newsuserIdHolder" value="" />
        <div class="inline"><h4 class = "margin">${object.title}</h4> <h5>${object.date}</h5></div>
        <p>${object.summary}</p>
        <a href="${object.url}"><p>${object.url}</p></a>
        </section>
        
        `; // The delete button stores the id of the news, the edit button stores the id of the person. Since they itterate the same in a loop, i can easily call them both.
    }

}

export default newsComponentMaker;
