import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {Note} from './models/note.modal';
import Noteslist from "./components/Noteslist";
import {Col,Row,Container} from "react-bootstrap";
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
      <Noteslist note= {notes}/>
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;
