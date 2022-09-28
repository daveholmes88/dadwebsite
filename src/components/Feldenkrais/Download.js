import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Download() {

    return (
        <Container>
            <h1>THIS IS WHERE YOU DOWNLOAD THE FELDENKRAIS MP3S!!!!</h1>
            <a href='/bruceholmes.zip' download><Button >DOWNLOAD THE MP3s WITH THIS BUTTON!!!!</Button></a>
        </Container>
    )
}