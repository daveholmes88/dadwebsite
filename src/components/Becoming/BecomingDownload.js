import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function BecomingDownload() {

    return (
        <Container>
            <h1>THIS IS WHERE YOU DOWNLOAD THE PDFs for Becoming a Square Dance Caller</h1>
            <a href='/becoming.zip' download><Button >DOWNLOAD THE PDFs WITH THIS BUTTON!!!!</Button></a>
            <br></br><br></br>
            <h3>If you have any issues please email my son Dave at DaveHolmes88@gmail.com</h3>
        </Container>
    )
}