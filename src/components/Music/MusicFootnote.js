import React from 'react'
import { Container, Col, Image } from 'react-bootstrap';

export default function MusicFootnote() {

    return (
        <div>
            <br></br>
            <Col xs={3}>
                <a href='https://open.spotify.com/artist/4szYqC2RCEl8EgDAijXLeh?si=0dtWVv_-QwKR8EfPB7_B1A' target='_blank' rel="noopener noreferrer">
                    <Image
                        src='/Music/spotify-button.png'
                        fluid='true'
                    />
                </a>
            </Col>
        </div>
    )
}