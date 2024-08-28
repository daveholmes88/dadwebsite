import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import ShoppingIndex from './ShoppingIndex'

export default function Music() {

    return (
        <Container>
            <Row>
                <ShoppingIndex />
                <Col>
                    <h1>Music</h1>
                    <h3>Thank you for your interest in my music.</h3>
                    <h4>Unfortunately, due to some health issues we have been forced to pause sales for a short time. Please check out my music on Spotify or Apple Music.</h4>
                    <h4>Thank you for your understanding.</h4>
                    <Row>
                        <Col sm={6}>
                            {/* <Image
                                src='/Music/LifeCover.jpg'
                                alt='lifeShopping'
                                fluid='true'
                            />
                            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="hidden" name="on0" value="Comes with a t-shirt for $4 more" />
                                                    Comes with a t-shirt for $4 more
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select name="os0">
                                                        <option value="No Thanks">No Thanks</option>
	                                                    <option value="Small">Small </option>
	                                                    <option value="Medium">Medium </option>
	                                                    <option value="Large">Large </option>
	                                                    <option value="XL">XL </option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <input type="hidden" name="on1" value="Color Pref: Blue, Red or Green" />
                                                Color Pref: Blue, Red or Green
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="text" name="os1" maxlength="200" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
                                </form>
                        </Col>
                        <Col sm={6}>
                            <div className='text-center'>
                                <h2>Life's An Intelligence Test</h2>
                                <p>
                                    <span class='quote'>A masterpiece of acoustic music!</span>
                                    <br></br>
                                Radio Teutoburger Wald, Germany
                            </p>
                                <p>
                                    <span class='quote'>Thanks for a great disc, Bruce.</span>
                                    <br></br>
                                George Maida, WCVE, Virginia
                            </p>
                                <p>
                                    <span class='quote'>14 great tracks with some excellent folk songs.</span>
                                    <br></br>
                                Jame Pearson, BBC Radio Shetland, Scotland
                            </p>
                                <p>
                                    <span class='quote'>A fine album, Bruce. Congratulations.</span>
                                    <br></br>
                                Bruce Cameron, Radio 2MCE-FM, Australia
                            </p>
                                <p>
                                    <span class='quote'>A beautiful CD. Great songs, fine singing and playing.</span>
                                    <br></br>
                                Theo Oldenburg, Radio WinsChoten, Netherlands
                            </p>
                                <h3>$14 (includes t-shirt)</h3>
                                <Image
                                    src='/Music/TShirtsSmallest.jpg'
                                    alt='lifeShirts'
                                    fluid='true'
                                />
                            </div>
                        </Col>
                    </Row>
                    <br></br><br></br>
                    <Row>
                        <Col sm={6}>
                            <div className='text-center'>
                                <Image
                                    src='/Music/OldKingReel.jpg'
                                    alt='okrCover'
                                    fluid='true'
                                />
                                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="YSD645NSTBC9N" />
                                    <table>
                                        <tbody><tr><td><input type="hidden" name="on0" value="Comes with a free t-shirt" />
                                    Comes with a t-shirt</td></tr><tr><td><select name="os0">
                                                <option value="No Thanks">No Thanks</option>
                                                <option value="Small">Small</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                                <option value="XL">XL</option>
                                                <option value="2XL">2XL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </select> </td></tr>
                                        </tbody>
                                    </table>
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='text-center'>
                                <h2>The Old King's Reel</h2>
                                <p>
                                    <span class='quote'>Bruce has delivered a beautiful CD with great songs and beautiful music.</span>
                                    <br></br>
                            Freddy Celis, Rootstime
                        </p>
                                <p>
                                    <span class='quote'>Great stuff. Like it a lot!!!!!</span>
                                    <br></br>
                            Martin van der Laan, Radio Compagnie
                        </p>
                                <p>
                                    <span class='quote'>A very cool CD.</span>
                                    <br></br>
                            Kevin Elliott, WEFT
                        </p>
                                <p>
                                    <span class='quote'>Deep feeling and always inspiring performances. I enjoyed it from start to finish, and I found great music in it, always accompanied by intelligent lyrics.</span>
                                    <br></br>
                            Remo Ricaldone, Susa Onda Radio, Italy
                        </p>
                                <h4>$14 (includes t-shirt)</h4>
                                <Image
                                    src='/Music/OldKingReelShirt.jpg'
                                    fluid='true'
                                    alt='okrshirt'
                                />
                            </div> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}