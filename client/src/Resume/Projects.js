import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

class Projects extends Component{
    render(){
        return(
            <Container id="proj">
                <h1>Projects</h1>
                <CardDeck>
                <Card>
                    <Card.Header>IS2103 Information Systems Server-side Design and Development Project</Card.Header>
                    <Card.Body>
                        <Card.Title>Hotel Reservation System</Card.Title>
                        <Card.Subtitle><br/>Aug 2018 - Dec 2018</Card.Subtitle>
                        <Card.Text><br/>Hotel Reservation System is a enterprise application backend that simulates the information systems that a hotel would use to manage its rooms and reservations. It is connected to a MySql database and built upon a Java EE backend using key Java EE technologies such as Enterprise JavaBeans (EJB), Java Persistence API (JPA) and Java Transaction API (JTA). It is also capable of connecting to multiple remote clients via SOAP webservices, allow for the access of business methods by remote third party partners. Hotel Reservation System is capable of essential CRUD operations with regards to room management and reservations, as well as perform basic and advanced business logic such as automated allocation of rooms during the day of reservation and automatic room upgrades during overbooking.</Card.Text>
                        <Button variant="primary" href="https://github.com/hongchew/HotelReservationSystem">Github</Button>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Header>IS3106 Information Systems Interface Design and Development Project</Card.Header>
                    <Card.Body>
                        <Card.Title>zhcq &amp; co (Ecommerce Website)</Card.Title>
                        <Card.Subtitle><br/>Work in Progress</Card.Subtitle>
                        <Card.Text><br/>zhcq &amp; co is an ecommerce platform that aims to provide convenient and fast fashion to the busy or uninspired. We are building a web application on JSF technologies with PrimeFaces component suite, as well as a hybrid mobile app using the Ionic framework. zhcq &amp; co will be running on a core Java EE backend connected to a MySql database, ensuring the mission criticality expected of an ecommerce platform.</Card.Text>
                    </Card.Body>
                </Card><br/>
                <Card>
                    <Card.Header>CS2102 Database Systems Project</Card.Header>
                    <Card.Body>
                        <Card.Title>Restaurant Booking Website</Card.Title>
                        <Card.Subtitle><br/>Work in Progress</Card.Subtitle>
                        <Card.Text><br/>Restaurant Booking Website is a restaurant reservation platform that allow diners to reserve a table from multiple restaurants with ease. It is a web application connected to an PostGreSQL database built on the express.js framework, and is capable of processing and storing large number of restaurant information and bookings.</Card.Text>
                    </Card.Body>
                </Card><br/>
                </CardDeck>
            </Container>
        )
    }
}

export default Projects;