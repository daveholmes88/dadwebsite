import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'

export default function AnvilTitle() {

    return (
        <Container>
            <div className='text-center'>
                <Image
                    alt='anvilCover'
                    src='/AnvilTitle.jpg'
                    fluid='true'
                />
            </div>
            <div className='text-right'>
                <a href='/SciFi/AnvilOrder'><Button variant='dark'>Buy Now</Button></a>
            </div>
        </Container>
    )
}














