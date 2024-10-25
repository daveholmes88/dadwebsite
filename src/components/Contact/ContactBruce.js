import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ContactIndex from './ContactIndex'

export default function ContactBruce() {

    return (
        <Container>
            <Row>
                <ContactIndex />
                <Col>
                    <h1>Contact Bruce</h1>
                    {/* <p>My email address is my first name at BruceTHolmes.com</p> */}
                    {/* <p>Bruce Holmes<br></br>1115 Mulford Street<br></br>Evanston, IL 60202-3318</p> */}
                    <p>Due to some health issues I am not able to check my email on a regular basis.</p>
                    <p>If you have any issues or questions please contact my son Dave at DaveHolmes88@gmail.com</p>
                </Col>
            </Row>
        </Container>
    )
}