import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function AdvancedSamplePages() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <h3 className='text-center'>Later Lesson: The Magic of Acey Deucey</h3>
                    <Image
                        alt='sample9'
                        src='/Becoming/page 99.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample10'
                        src='/Becoming/page 100.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample11'
                        src='/Becoming/page 101.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample12'
                        src='/Becoming/page 102.jpeg'
                        fluid='true'
                    />
                </Col>
            </Row>
        </Container>
    )
}