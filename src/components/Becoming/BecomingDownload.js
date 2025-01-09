import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function BecomingDownload() {

    return (
        <Container>
            <h1>THIS IS WHERE YOU DOWNLOAD THE PDFs for Becoming a Square Dance Caller</h1>
            <a href='/becoming.zip' download><Button >DOWNLOAD THE PDFs WITH THIS BUTTON!!!!</Button></a>
            <br></br><br></br>
            <h3>If you have any issues please email my son Dave at DaveHolmes88@gmail.com</h3>
            <h3>I've heard from several sources that those in Europe are not able to download the file. I'm working to figure out the problem. In the mean time please just email my son and he will send you the file. I'm sorry for the inconvenience.</h3>
        </Container>
    )
}