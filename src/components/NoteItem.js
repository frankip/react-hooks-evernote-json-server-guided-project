import React from "react";
import NoteViewer from "./NoteViewer";

function NoteItem({title, body}) {

  const handleViewNote= (title, body) => {
    <NoteViewer title={title} body={body} />
      console.log("cloccke");
  };
  return (
    <li onClick={handleViewNote}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default NoteItem;
