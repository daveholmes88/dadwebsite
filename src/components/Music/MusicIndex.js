import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';

export default function MusicIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <a href='/Music'><h1 className='text-center'>Music</h1></a>
                    <br></br>
                    <h2 className='text-center'>Albums</h2>
                    <a href='/Music/Life'><h4>Life's an <br></br>Intelligence Test</h4></a>
                    <a href='/Music/OKR'><h4>The Old King's Reel</h4></a>
                    <br></br>
                    <br></br>
                    <h4 className='text-center'>Press Package</h4>
                    <a href='/Music/Photos'>Publicity Photos</a><br></br>
                    <a href='/Music/PressBio'>Bio</a><br></br>
                </Container>
            </Card>
        </Col >
    )
}