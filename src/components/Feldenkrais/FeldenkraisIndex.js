import React from 'react'
import { Col, Card, Image, Container } from 'react-bootstrap'

export default function FeldenkraisIndex() {

    return (
        <Col sm={3}>
            <Card border='dark' >
                <Image
                    src='/Feldenkrais/Feldenkrais.jpg'
                    fluid='true'
                    alt='feldenkrais'
                />
                <Container>
                    <Card.Title><h3>The Feldenkrais Method</h3></Card.Title>
                    <br></br>
                    <a href='/Feldenkrais'>The Method Explained</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/History'>History of the Lessons</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/LessonList'>A List of the Lessons</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/CDPressQuotes'>Press Quotes</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/CDUserQuotes'>User Quotes</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/Price'>Price & Purchase</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/FreeLesson'>Listen to a Free Lesson</a>
                    <br></br><br></br>
                    <a href='/Feldenkrais/MosheFeldenkrais'>Moshe’s Healing Touch from Runner's World</a>
                    <br></br><br></br>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />

                </Container>
            </Card>
        </Col>
    )
}