import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import BecomingIndex from './BecomingIndex'
import BecomingTitle from './BecomingTitle'

export default function HowToOrder() {

    return (
        <Container>
            <Row>
                <BecomingIndex />
                <Col>
                    <BecomingTitle />
                        <Container>
                            <h3>Thank you for your interest in Becoming a Square Dance Caller.</h3>
                            <h4>Unfortunately, due to some health issues we have been forced to pause the sale of this book. If you are interested in buying once sales have continued please email my son at daveholmes88@gmail.com</h4>
                            <h4>Thank you for your understanding.</h4>
                            {/* <h3 className='text-center'><h1>How To Order</h1></h3>
                            <h3 className='text-center'>$40 plus S&H</h3>
                            <h4>8.5x11" 206 Pages</h4>
                            <p>Wire sprial bound so it can lie flat</p>
                            <h3><h2>USA: S&H = $7, total = $47</h2></h3>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="63ECV6W4VGA7L" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <h3><h2>Canada: S&H = $22, total = $62</h2></h3>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="EUM9QFA9352MC" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <h3><h2>Overseas: S&H = $30, total = $70</h2></h3>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="GUUDYMEVUSW98" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <p>
                                Or mail a check with your address and contact information to
                            <br></br>Bruce Holmes
                            <br></br>1115 Mulford St
                            <br></br>Evanston, IL 60202-3318
                        </p> */}
                        </Container>
                </Col>
            </Row>
        </Container>
    )
}