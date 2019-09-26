const friendsComponentMaker = {
    makefriendsSection: function (code) {
        return `
        <form id="friends-form">
        <h3 class = "friendsIdentifier">New Friend: Your Friend code: ${}</h3>
       
        <fieldset>
            <label for="friendsName">Enter Friend's Email:</label>
            <input type="textarea" name="friendsSummary" id="friendsSummary" required>
        </fieldset>
       
        <fieldset class="inline">

            <button id="friendsSubmit">Submit</button>
            <input type="reset" value="Reset"/>
            <input type="hidden" id="idEdit" value="" />


        </fieldset>
    </form>

    <article id = "friendsSection">
    </article>
        
        `;
    },

    makefriendsArticle: function (object) {
        return `<section id="sectionFriends${object.id}">
        
        <div class="inline"> <h4>${object.user.userEmail}</h4> <button class="friendsDelete margin" value="${object.id}">Delete</button> </div>
        </section>
        
        `;
    },

    makeUneditablefriendsArticle: function (object) {
        return `<section>
        <input type="hidden" class="friendsIdHolder" value="" />
        <input type="hidden" class="friendsuserIdHolder" value="" />
        <div class="inline"><h4 class = "margin">${object.title}</h4> <h5>${object.date}</h5></div>
        <p>${object.summary}</p>
        <a href="${object.url}"><p>${object.url}</p></a>
        </section>
        
        `;
    }

}

export default friendsComponentMaker;
