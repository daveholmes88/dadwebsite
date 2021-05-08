import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';

export default function MusicFootnote() {

    return (
        <div>
            <br></br>
            <Row>
                <Col xs={3}>
                    <a href='https://open.spotify.com/artist/4szYqC2RCEl8EgDAijXLeh?si=0dtWVv_-QwKR8EfPB7_B1A' target='_blank' rel="noopener noreferrer">
                        <Image
                            src='/Music/spotify-button.png'
                            fluid='true'
                        />
                    </a>
                </Col>
                <Col xs={3}>
                    <a href='https://music.apple.com/us/artist/bruce-holmes/151585088' target='_blank' rel="noopener noreferrer">
                        <Image
                            src='/Music/listen-on-apple-1.png'
                            fluid='true'
                        />
                    </a>
                </Col>
            </Row>
        </div>
    )
}