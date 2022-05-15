import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function SamplePages() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                    <h3 className='text-center'>Sample Beginner Pages</h3>
                    <Image
                        alt='sample1'
                        src='/Becoming/page 20.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample2'
                        src='/Becoming/page 21.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample3'
                        src='/Becoming/page 22.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample4'
                        src='/Becoming/page 23.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample5'
                        src='/Becoming/page 24.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample6'
                        src='/Becoming/page 25.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample7'
                        src='/Becoming/page 26.jpg'
                        fluid='true'
                    />
                    <Image
                        alt='sample8'
                        src='/Becoming/page 27.jpg'
                        fluid='true'
                    />
                </Col>
            </Row>
        </Container>
    )
}