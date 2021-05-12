import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

export default function MovementIndex() {

    return (
        <Col sm={3} >
            <Card border='dark'>
                <Container>
                    <h2>Movement</h2>
                    <br></br>
                    <a href='/Feldenkrais'>Felenkrais</a>
                    <br></br><br></br>
                    <a href='/Dance/Social'>Dance</a>
                    <br></br><br></br>
                    <a href='/Triathlon/You'>Triathlon</a>
                    <br></br><br></br>
                    <a href='/Movement/Aikido'>Aikido</a>
                    <br></br><br></br>
                    <a href='/Movement/Juggling'>Juggling</a>
                    <br></br><br></br>
                    <a href='/Movement'>Movement Quotes</a>
                    <br></br>
                </Container>
            </Card>
        </Col >
    )
}