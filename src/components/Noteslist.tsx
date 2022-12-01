import * as React from 'react';
import Notes from "./Notes";
import {Note} from "../models/note.modal";

interface INoteslistProps {
    notes:Note[]
    setnotes:React.Dispatch<React.SetStateAction<Note[]>>
}


const Noteslist: React.FC<INoteslistProps> = ({notes , setnotes}) => {
  const handleDelete  =(id:string)=>{
    setnotes(notes.filter(note=>note.id !==id));

  };
  const renderNotes =():JSX.Element[] =>{
   return notes.map(note =>
    {
return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
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
