import React, { Component } from 'react';
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import CommentBox from "../Comments/CommentBox"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import base, { auth, providers } from "../base";

class Resume extends Component {
    render(){
      return (
        <div>
          <header id="home">
            <Navbar bg="primary" variant="dark" fixed="top">
              <Navbar.Brand href="#home">Toh Hong Chew</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#edu">Education</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#proj">Projects</Nav.Link>
                <Nav.Link href="#comments">Comments</Nav.Link>
              </Nav>
            </Navbar>
            <br/>
            <Jumbotron>
              <Image src="/Resources/profilepic.jpg" roundedCircle width='200px'/><br/>
              <h1>Toh Hong Chew</h1><br/>
              <p>I'm an Information Systems undergraduate at the National University of Singapore.</p><br/>
              <p><a href="/Resources/Hong_Chew_TOH_CV.pdf" target="_blank"><Button variant="primary">Download My Resume</Button></a></p><br/>
            </Jumbotron>
          </header>
          
          <body>
            <Education/><br/>
            <Skills/><br/>
            <Projects/><br/>
            <CommentBox base={base} auth={auth} providers={providers}/>
          </body>
        </div>
        
        
      );
    }
}
export default Resume;