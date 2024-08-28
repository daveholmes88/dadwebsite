import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SciFiIndex from './SciFiIndex'
import AnvilTitle from './AnvilTitle'

export default function AnvilOrder() {

    return (
        <Container>
            <Row>
                <SciFiIndex />
                <Col>
                <Container>
                            <AnvilTitle />
                            <h3>Thank you for your interest in Anvil of the Heart.</h3>
                            <h4>Unfortunately, due to some health issues we have been forced to pause the sale of this book. If you are interested in buying once sales have continued please email my son at daveholmes88@gmail.com</h4>
                            <h4>Thank you for your understanding.</h4>
                            {/* <h3 className='text-center'><h1>How To Order</h1></h3>
                            <h3 className='text-center'>$25 plus S&H</h3>
                            <h3><h2>USA: S&H = $7, total = $32</h2></h3>
                            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="B2272TPS3Q6T8" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <h3><h2>Canada: S&H = $22, total = $47</h2></h3>
                            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="N8GRF3QTZXUMJ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                            <br></br><br></br>
                            <h3><h2>Overseas: S&H = $30, total = $55</h2></h3>
                            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="GE4SCRY4FVJZ6" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
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