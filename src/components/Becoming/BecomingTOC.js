import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function BecomingTOC() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <h3 className='text-center'>Table of Contents</h3>
                    <Image
                        alt='tc1'
                        src='/Becoming/page1.jpeg'
                        fluid='true'
                    />
                    <Image
                        alt='tc1'
                        src='/Becoming/page 2.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='tc1'
                        src='/Becoming/page 3.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='tc1'
                        src='/Becoming/page 4.jpg'
                        fluid='true'
                    />
                </Col>
            </Row>
        </Container>
    )
}

