import * as React from 'react';
import Notes from "./Notes";
import {Note} from "../models/note.modal";

interface INoteslistProps {
    note:Note[]
}

const Noteslist: React.FC<INoteslistProps> = ({note}) => {
  const renderNotes =()=>{
   return note.map(note =>
    {
return <Notes key={note.id} note={note}/>
    })
  }
  return (
    <>
    <h2 className= "mt-3">Notes</h2>
    <div>{renderNotes()}</div>
    </>
  )
};

export default Noteslist;
