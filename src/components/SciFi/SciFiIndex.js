import React from 'react'
import { Col, Card, Container, Button } from 'react-bootstrap'

export default function SciFiIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <h2>Science Fiction</h2>
                    <a href='/SciFi/Anvil'><h3>Anvil of the Heart</h3></a>
                    <div>
                        <a href='/SciFi/AnvilQuotes'>Author Quotes</a>
                        <br></br>
                        <a href='/SciFi/AnvilFanQuotes'>Fan Quotes</a>
                        <br></br>
                        <a href='/SciFi/AnvilChap1'>First Chapter</a>
                        <br></br><br></br>
                        <a href='/SciFi/AnvilOrder'><Button variant='dark'>Buy Now</Button></a>
                        <br></br><br></br>
                        <a href='/SciFi/Switch'><h4>The Switch of Time</h4></a>
                        <Card.Text>A Short Story</Card.Text>
                        <br></br>
                    </div>
                </Container>
            </Card>
        </Col>
    )
}