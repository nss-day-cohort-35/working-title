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

            <input type="submit" value="Submit" id="newsSubmit">
            <input type="reset">
            <input type="hidden" id="idedit" value="" />


        </fieldset>
    </form>

    <article id = "newsSection">
    </article>
        
        
        `;
    },

    makeNewsArticle: function (object) {
        return `<section>
        <input type="hidden" class="newsIdHolder" value="${object.id}" />
        <input type="hidden" class="newsuserIdHolder" value="${object.userId}" />
        <div class="inline"><h4 id="newsTitle${object.id}">${object.title}</h4> <h5 id="newsDate${object.id}">${object.date}</h5></div>
        <p>${object.summary}</p>
        <a href="${object.url}"><p id="newsUrl${object.id}">${object.url}</p></a>
        </section>
        
        `;
    }

}

export default newsComponentMaker;