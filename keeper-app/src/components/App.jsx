import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    //console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    //console.log("Delete was trigged");
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notesItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
