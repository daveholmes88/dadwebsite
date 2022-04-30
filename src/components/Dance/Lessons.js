import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function SquareLessons() {

    return (
        <Container>
            <Row>
                <DanceIndex />
                <Col>
                    <h1>Bruce's Square Dance Lessons</h1>
                    <p>These days I spend several nights a week teaching square dance for a club called <a href='https://glenviewsquares.org/'>Glenview Squares</a> and you can visit our web site by clicking on the club's name. We operate north of Chicago in Evanston, Skokie, Wilmette, Kenilworth and points north. It's a wonderful bunch of people and a huge amount of fun.</p>
                    <div className='text-center'>
                        <Image
                            src='/Dance/SquareDanceCircle.jpg'
                            alt='squareCircle'
                            fluid='true'
                        />
                    </div>
                    <br></br>
                    <p>Square dancing reminds me of football, except without the cuncussions. You've got formations. You've got a team around you. You've got plays sent in by the caller. The challenge is, can you run your route successfully? Now, granted, the team is coed. But that's a feature. If you enjoyed geometry in high school, you'd get a kick out of this stuff.</p>
                    <p>I'd like to say square dancing is for everyone, but I'm not sure it is. It's challenging. But it's a wonderful world of music and energy and bright, focused people operating at 100% of their abilities. In September & January we offer free introductory lessons so you can see for yourself. You ought to give it a try.</p>
                </Col>
            </Row>
        </Container>
    )
}