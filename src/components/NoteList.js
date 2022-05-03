import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {

  const notesList = notes.map((note)=>(
    <NoteItem key={note.id} title={note.title} body={note.body}/>

  ))
  return (
    <ul>
      {notesList}
    </ul>
  );
}

export default NoteList;
