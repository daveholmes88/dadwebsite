import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

export default function ContactIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <h3>Staying in Touch</h3>
                    {/* <br></br> */}
                    {/* <a href='/MailList'>Join the Mail List</a>
                    <br></br><br></br> */}
                    <a href='/Contact'>Contact Bruce</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col>
    )
}