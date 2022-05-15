import React from 'react'
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function BecomingIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Container>
                    <h2>Becoming a Square Dance Caller</h2>
                    <Image
                        alt='becomingCover'
                        src='/Becoming/cover.jpeg'
                        fluid='true'
                    />
                    <br></br>
                    <a href='/Becoming'>Becoming A Caller</a>
                    <br></br><br></br>
                    <a href='/BecomingTOC'>Table of Contents</a>
                    <br></br><br></br>
                    <a href='/BecomingSPages'>Beginner Sample Pages</a>
                    <br></br><br></br>
                    <a href='/BecomingAdvanced'>Advanced Sample Pages</a>
                    <br></br><br></br>
                    <a href='/BecomingQuotes'>Quotes</a>
                    <br></br><br></br>
                    <a href='/BecomingHowToOrder'>Buy Now</a>
                    <br></br><br></br>
                </Container>
            </Card>
        </Col>
    )
}