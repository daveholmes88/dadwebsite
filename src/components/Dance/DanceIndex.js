import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

export default function DanceIndex() {

    return (
        <Col sm={3} >
            <Card border='dark'>
                <Container>
                    <a href='/Dance/Social'><h2>Social Dance</h2></a>
                    <br></br>
                    <a href='/Dance/ECD'>English Country Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/Folk'>Folk Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/Scottish'>Scottish Country Dance</a>
                    <br></br><br></br>
                    <a href='/Dance/Barn'>Barn Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/Square'>Square Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/Ballroom'>Ballroom Dancing</a>
                    <br></br><br></br>
                    <a href='/Dance/Performance'>Performance Dance</a>
                    <br></br><br></br>
                    <a href='/Dance/Which'>Which To Try</a>
                    <br></br><br></br>
                    <a href='/Becoming'>Becoming a Square Dance Caller</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col >
    )
}