const messagesComponentMaker = {
  makeMessagesSection: function() {
    return `
        <form id="messages-form">
        <h3 class = "messagesIdentifier">New messages Entry</h3>
      
       
        <fieldset>
            <label for="messagesText">Text</label>
            <input type="textarea" name="messagesText" id="messagesText" required>
        </fieldset>
    
        <fieldset class="inline">

            <button id="messagesSubmit">Submit</button>
            <input type="reset">
            <input type="hidden" id="idMessagesEdit" value="" />


        </fieldset>
    </form>

    <article id = "messagesSection">
    </article>
    
    <input type="hidden" id="timeoutVar2" value=""/>
        
        `;
  },

  makeMessagesArticle: function(object) {
    return `<section id="sectionTwo${object.id}">
            <div class="inline">
            <h5>${object.date}
            </h5>
            <h3>${object.userId.email}</h3>
            <p> - </p> <p>${object.text}</p>
            </div>
               <div><button class="messagesDelete margin" value="${object.id}">Delete</button>
               <button class="messagesEdit" value="${object.userId}">Edit</button></div>
        </section>
        
        `; // The delete button stores the id of the messages, the edit button stores the id of the person. Since they itterate the same in a loop, i can easily call them both.
  },

  makeUneditablemessagesArticle: function(object) {
    return `<section>
        <input type="hidden" class="messagesIdHolder" value="" />
        <input type="hidden" class="messagesuserIdHolder" value="" />
        <div class="inline"><h4 class = "margin">${object.title}</h4> <h5>${object.date}</h5></div>
        <p>${object.summary}</p>
        <a href="${object.url}"><p>${object.url}</p></a>
        </section>
        
        `; // The delete button stores the id of the messages, the edit button stores the id of the person. Since they itterate the same in a loop, i can easily call them both.
  }
};

export default messagesComponentMaker;