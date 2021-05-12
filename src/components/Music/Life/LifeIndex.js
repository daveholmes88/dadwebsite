import React from 'react';
import { Col, Card, Container } from 'react-bootstrap';

export default function LifeIndex() {

    return (
        <Col sm={3}>
            <br></br>
            <Card border='dark'>
                <Container>
                    <a href='/Music/Life'><h3 className='text-center'>Life's An <br></br>Intelligence Test</h3></a>
                    <br></br>
                    <a href='/Music/LifeStory'>The Story Of</a><br></br>
                    <a href='/Music/Concert2005'>Concert Photos</a>
                    <br></br>
                    <br></br>
                    <h4 className='text-center'>Reviews</h4>
                    <a href='/Music/ReviewWesternSprings'>Western Springs</a><br></br>
                    <a href='/Music/ReviewEvanston'>Evanston Review</a><br></br>
                    <br></br>
                    <a href='/Music'><h4 className='text-center'>Return to Music</h4></a>
                </Container>
            </Card>
        </Col >

    )
}
