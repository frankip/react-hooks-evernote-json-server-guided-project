import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notesList, setNotesList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotesList(data)
      });

  })
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notesList}/>
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
