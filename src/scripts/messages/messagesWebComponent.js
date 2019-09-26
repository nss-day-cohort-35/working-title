const messagesWebComponent = {
  makeMessagesSection: () => {
    return `
        <form id="messages-form">
        <h3 class="messagesIdentifier">New messages Entry</h3>
        <fieldset>
            <label for="messagesText">New Message</label>
            <input type="textarea" name="messagesText" id="messages-text-area" required>
        </fieldset>
        <fieldset class="inline">
        <button id="messages-submit-button">Submit</button>
        <input type="hidden" id="messages-edit-input" value="" />
        </fieldset>
    </form>
    <article id="messages-article"></article>
        
        `;
  },

  makeMessagesArticle: (object) =>  {
    return `<section id="sectionTwo${object.id}">
            <div class="inline">
            <h5 class="margin">${object.date}
            </h5>
            <h3 id="messagesEmail${object.id}">${object.user.userEmail}</h3>
            <p class="margin"> - </p> 
            <p id="messagesText${object.id}">${object.text}</p>
            </div>
               <div><button id="messages-delete-button"class="messagesDelete margin" value="${object.id}">Delete</button>
               <button id="messages-edit-button" class="messagesEdit" value="${object.userId.id}">Edit</button></div>
        </section>
        
        `
  },
};

export default messagesWebComponent;