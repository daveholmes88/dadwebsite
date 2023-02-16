import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import SciFiIndex from './SciFiIndex'

export default function SciFi() {

    return (
        <Container>
            <Row>
                <SciFiIndex />
                <Col>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/AnvilCover.jpg'
                                    fluid='true'
                                    align='left'
                                    alt='anvil-cover'
                                    className='picture'
                                />
                            </div>
                            <div class='pull-right'>
                                <h1 className='text-center'>Anvil of the Heart</h1>
                                <h4 className='text-center'>$20 Autographed Hardcover</h4>
                                <div class='text-right'>
                                    <a href='/SciFi/AnvilOrder'><Button variant='dark'>Buy Now</Button></a>
                                </div>
                                <br></br>
                                <p class='image-text'>
                                    This is a science fiction novel of mine published in 1984. For one brief and oh-so-ephemeral moment that summer it led the Nebula Nominations for best novel, then got left in the dust. It also made the Locus recommended list for that year and was a Prometheus Nominee. It was translated into German and Japanese. Get in touch if you want one of the foreign editions.
                                </p>
                                <br></br>
                                <h4>The Story:</h4>
                                <p>
                                    John Cunningham, an archivist, is wrapping up the history of the old race. Thanks to genetic alterations John's children (and all the future children of mankind) are blessed with greater intellect and calmer emotions. John is a relic of the past. But John is tired of feeling useless and begins to explore the potential of homo sapiens. His training leads him to fall in with renegades, humans unwilling to go along with the new genetic guidelines. People who want to bear children in their own image, not the strange unloving creatures that are replacing them all. And that makes them criminals to be hunted down by the police. Unless they fight back.
                                </p>
                                <p>Also available as an ebook for $6 on <a href="https://www.amazon.com/Anvil-Heart-Bruce-T-Holmes-ebook/dp/B001ELJBLS/ref=sr_1_1?crid=11MHL6MXNFUUB&keywords=anvil+of+the+heart&qid=1651341225&sprefix=anvil+of+the+heart%2Caps%2C103&sr=8-1">Amazon,</a> <a href='https://www.barnesandnoble.com/w/anvil-of-the-heart-bruce-t-holmes/1000893499'>Barnes & Noble,</a> <a href='https://books.apple.com/us/book/anvil-of-the-heart/id635579620'>Apple Books,</a> and <a href='https://www.smashwords.com/books/view/304670'>Smashwords</a></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}