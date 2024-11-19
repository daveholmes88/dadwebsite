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
                            <h3 className='text-center'>Thank you for your interest in Becoming a Square Dance Caller.</h3>
                            <h3 className='text-center'>Now Available Both In PDF Format and Physical Copy</h3>
                            <br></br>
                            <p>I have fought against offering this book in a digital format. I have dozens of PDFs that sit idly on my computer. I don’t want that to happen to this book. If you’re on this page, this book is way too important to your future as a caller. So I want you to have a real book. One that sits on a table and begs to be picked up. However, people have convinced me a digital version makes sense financially. So, while I hope you spend the extra money and get the real thing, we are now offering a pdf if money is tight.</p>
                            <h4 className='text-center'>SEE BELOW FOR DETAILS. All book purchases will come with a PDF version available immediately. After buying the book, you'll be brought back to a page where you can download the PDFs.</h4>
                            <h4 className='text-center'>PLEASE NOTE: It may take a while to ship the books on any orders for physical copies. However, we will contact you immediately after purchase with more information. Thank you for your patience.</h4>
                            <p>If you have any questions please contact my son Dave at DaveHolmes88@gmail.com</p>
                            <br></br>
                            <h2 className='text-center'>How To Order</h2>
                            <h3 className='text-center'>$40 plus S&H</h3>
                            <h4>8.5x11" 206 Pages</h4>
                            <p>Wire sprial bound so it can lie flat</p>
                            <h2>USA: S&H = $7, total = $47</h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="63ECV6W4VGA7L" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                            </form>
                            <br></br><br></br>
                            <h2>Canada: S&H = $22, total = $62</h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="EUM9QFA9352MC" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                            </form>
                            <br></br><br></br>
                            <h2>Overseas: S&H = $30, total = $70</h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="GUUDYMEVUSW98" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                            </form>
                            <br></br><br></br>
                            <h2>PDF Format Only: $20</h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="B22GNTNFZ8WDC" />
                                <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                            </form>
                            <br></br>
                            {/* <p>
                                Or mail a check with your address and contact information to
                            <br></br>Bruce Holmes
                            <br></br>1115 Mulford St
                            <br></br>Evanston, IL 60202-3318
                        </p>  */}
                        </Container>
                </Col>
            </Row>
        </Container>
    )
}