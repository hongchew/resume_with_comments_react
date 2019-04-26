import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container'

class Education extends Component{
    render(){
        return(
            <Container id="edu">
                <h1>Education</h1>
                <CardDeck>
                <Card>
                    <Card.Header>University</Card.Header>
                    <Card.Body>
                        <Card.Title>National University of Singapore</Card.Title>
                        <Card.Subtitle><br/>Bachelors of Computing (Honours) in Information Systems</Card.Subtitle>
                        <Card.Text>
                            2017 - Present <br/>
                            CAP: 4.73/5.00
                        </Card.Text>
                        <Card.Text><br/>Please download a copy of my resume for more details on courses taken and grades attained.</Card.Text>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Header>College</Card.Header>
                    <Card.Body>
                        <Card.Title>Tembusu College</Card.Title>
                        <Card.Subtitle><br/>University Town College Program</Card.Subtitle>
                        <Card.Text>2017 - Present</Card.Text>
                        <Card.Text><br/>Tembusu College is a residential college in the National University of Singapore that offers multidisciplinary seminar based courses that develop effective communications and strong writing skills, critical thinking skills, and intellectual breadth and rigor to tackle the complex, inter-related challenges confronting the world today.</Card.Text>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Header>High School</Card.Header>
                    <Card.Body>
                        <Card.Title>Victoria Junior College</Card.Title>
                        <Card.Subtitle><br/>Singapore-Cambridge General Certificate of Education Advanced Level</Card.Subtitle>
                        <Card.Text>
                            Jan 2013 - Dec 2014<br/> 
                            Rank Points 86.25/90
                        </Card.Text>
                        <Card.Text><br/>Subjects taken: Biology, Chemistry, Economics, Mathematics, General Paper and Project Work</Card.Text>
                    </Card.Body>
                </Card><br/>
                </CardDeck>
            </Container>
        )
    }
}

export default Education;