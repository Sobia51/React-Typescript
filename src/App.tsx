import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {Note} from './models/note.modal';
import Noteslist from "./components/Noteslist";
import {Col,Row,Container} from "react-bootstrap";
import Createnotes from"./components/Createnotes";
function App() {
  const [notes, setnotes] = useState<Note[]>([
    {
      id :(new Date).toString(),
      title : "Meeting",
      text: "Schedule Meeting",
      color: "#dfdfdf",
      date : (new Date).toString()
    }
  ]);
  return (
    <>
   <Header/>
   <Container className="mt-5">
    <Row>
      <Col>
      <Noteslist notes= {notes} setnotes={setnotes}/>
      </Col>
    </Row>
    <Row>
      <Col>
      <Createnotes notes= {notes} setnotes={setnotes}/>
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;
