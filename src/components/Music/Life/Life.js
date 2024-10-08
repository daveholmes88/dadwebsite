import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { AudioPlayerControlSprite, AudioPlayer } from 'react-audio-player-pro';
import reactAudioPlayerProStyle from 'react-audio-player-pro/dist/style.css';


import LifeIndex from './LifeIndex'
import MusicFootnote from '../MusicFootnote'

export default function Life() {

    const audioTrackList = [
        {
            src: '/Music/LifeSongs/IDo.mp3',
            content: '1. I Do',
        },
        {
            src: '/Music/LifeSongs/Angels.mp3',
            content: '2. Angels',
        },
        {
            src: '/Music/LifeSongs/Believe.mp3',
            content: '3. I Believe In You',
        },
        {
            src: '/Music/LifeSongs/Vegas.mp3',
            content: '4. Long Vegas Night',
        },
        {
            src: '/Music/LifeSongs/Intelligence.mp3',
            content: "5. Life's an Intelligence Test",
        },
        {
            src: '/Music/LifeSongs/Beautiful.mp3',
            content: '6. So Beautiful',
        },
        {
            src: '/Music/LifeSongs/ElVien.mp3',
            content: '7. El Viento Del Diablo',
        },
        {
            src: '/Music/LifeSongs/Family.mp3',
            content: '8. We Were a Family',
        },
        {
            src: '/Music/LifeSongs/Home.mp3',
            content: '9. Home',
        },
        {
            src: '/Music/LifeSongs/Stand.mp3',
            content: '10. Stand',
        },
        {
            src: '/Music/LifeSongs/PlagueShip.mp3',
            content: '11. Plague Ship',
        },
        {
            src: '/Music/LifeSongs/Lose.mp3',
            content: '12. You Just Might Lose',
        },
        {
            src: '/Music/LifeSongs/Shine.mp3',
            content: '13. Shine',
        },
        {
            src: '/Music/LifeSongs/WhenTheShip.mp3',
            content: '14. When The Ship Comes In',
        },
    ]

    return (
        <Container>
            <Row>
                <LifeIndex />
                <Col>
                    <h1>Life's An Intelligence Test</h1>
                    <Row>
                        <Col>
                            <Image
                                src='/Music/LifeCover.jpg'
                                alt="life"
                                fluid='true'
                            />
                            <br></br><br></br>
                            <Card border='dark'>
                                <>
                                    <AudioPlayerControlSprite />
                                    <AudioPlayer
                                        trackList={audioTrackList}
                                        className="LifePlayer"
                                        defaultState={{
                                            isMuted: false,
                                            activeIndex: 0,
                                            isShuffleOn: false,
                                            isTrackListOpen: true,
                                            repeatingState: 'none',
                                        }}
                                    />
                                </>
                            </Card>
                        </Col>
                        <Col>
                            <div className='text-center'>
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
                                <br></br>
                                <br></br>
                                {/* <h3>Buy it Now: $10</h3>
                                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="ALT32F399HQCW" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                                <p>or make it $14 and we'll throw in a t-shirt</p>
                                <Image
                                    src='/Music/TshirtsSmallest.jpg'
                                    alt="shirts"
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
                                </form> */}
                            </div>
                        </Col>
                    </Row>
                    <MusicFootnote />
                </Col>
            </Row>
        </Container>
    )
}