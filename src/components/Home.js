import React from "react"
import { Container, Jumbotron, Card, Row } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Jumbotron id='jumbotron'>
                <Container>
                    <Row className="justify-content-end">
                        <a href='/feldenkrais.html'>
                            <Card>
                                <Card.Img src="MenuFeldenkrais.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/becoming.html'>
                            <Card >
                                <Card.Img src="MenuBecoming.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/SciFi/Anvil.html'>
                            <Card>
                                <Card.Img src="MenuSciFi.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Music/Music.html'>
                            <Card>
                                <Card.Img src="MenuMusic.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Touch/TouchMailList.html'>
                            <Card>
                                <Card.Img src="MenuTouch.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Triathlon/TriYou.html'>
                            <Card>
                                <Card.Img src="MenuTri.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/TwoCents/TwoCents.html'>
                            <Card>
                                <Card.Img src="MenuTwoCents.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Dance/DanceSocial.html'>
                            <Card>
                                <Card.Img src="MenuDance.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                </Container>
            </Jumbotron>
        </div >
    )
}