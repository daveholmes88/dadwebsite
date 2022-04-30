import React from "react"
import { Jumbotron, Card, Row } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Jumbotron id='jumbotron'>
                <div id='card-container'>
                    <Row className="justify-content-end">
                        <a href='/Feldenkrais'>
                            <Card>
                                <Card.Img src="MenuFeldenkrais.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Becoming'>
                            <Card >
                                <Card.Img src="MenuBecoming.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/SciFi/Anvil'>
                            <Card>
                                <Card.Img src="MenuSciFi.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Music'>
                            <Card>
                                <Card.Img src="MenuMusic.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Triathlon/You'>
                            <Card>
                                <Card.Img src="MenuTri.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/TwoCents'>
                            <Card>
                                <Card.Img src="MenuTwoCents.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Dance/Social'>
                            <Card>
                                <Card.Img src="MenuDance.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                    <Row className="justify-content-end">
                        <a href='/Contact'>
                            <Card>
                                <Card.Img src="MenuTouch.jpg" alt="Card Image" />
                            </Card>
                        </a>
                    </Row>
                </div>
            </Jumbotron>
        </div >
    )
}