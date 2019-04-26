import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class Skills extends Component{
    render(){
        return(
            <Container id="skills">
                <h1>Skills</h1>
                <CardDeck>
                    <Card>
                        <Card.Header>Programming Languages</Card.Header>
                        <Card.Title>
                            <ListGroup>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>C</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>HTML5</ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                            </ListGroup>
                        </Card.Title>
                    </Card><br/>
                    <Card>
                        <Card.Header>Frameworks and other tools</Card.Header>
                        <Card.Title>
                            <ListGroup>
                                <ListGroup.Item>JSF with Component Suite</ListGroup.Item>
                                <ListGroup.Item>Angular</ListGroup.Item>
                                <ListGroup.Item>Ionic</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>express</ListGroup.Item>
                                <ListGroup.Item>Postgres &amp; SQL</ListGroup.Item>
                            </ListGroup>
                        </Card.Title>
                    </Card><br/>
                </CardDeck>

            </Container>
        )
    }
}

export default Skills;