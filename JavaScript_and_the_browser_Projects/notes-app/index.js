// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const NotesModel = require('./notesModel');
const Notesview = require('./notesView');


const api = new NotesApi();
const model = new NotesModel();
const noteview = new Notesview(model, api);


api.loadNotes((notes) => {
    // This method is new — you'll need to add it to the model class
    model.setNotes(notes);
    noteview.displayNotes();
  });
