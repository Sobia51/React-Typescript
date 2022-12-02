import React from 'react'
import {Container, Navbar } from "react-bootstrap";
type HeaderProps = {}

export default function Header({}: HeaderProps) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
      NEW NOTES
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}