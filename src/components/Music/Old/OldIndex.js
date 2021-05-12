import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

export default function OldIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <a href='/Music/OKR'><h3 className='text-center'>The Old King's Reel</h3></a>
                    <br></br>
                    <h4 className='text-center'>Reviews</h4>
                    <a href='/Music/ReviewChiTribune'>Chicago Tribune</a><br></br>
                    <a href='/Music/ReviewRickLibrarian'>Rick Librarian</a><br></br>
                    <br></br>
                    <a href='/Music'><h4 className='text-center'>Return to Music</h4></a>
                </Container>
            </Card>
        </Col >
    )
}
