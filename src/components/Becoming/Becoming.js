import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function Becoming() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <br></br><br></br>
                    <h4 className='text-center'>This is the book I wish I had when I was learning to call.</h4>
                    <Image
                        alt='becomingCover'
                        src='/Becoming/cover.jpeg'
                        fluid='true'
                    />
                    <h4>4th Edition</h4>
                    <h4>8.5 x 11" 206 pages</h4>
                    <p>wire spiral bound so it can lie flat</p>
                    <p>Includes a pdf file of pages for mobile study</p>
                </Col>
            </Row>
        </Container >
    )
}