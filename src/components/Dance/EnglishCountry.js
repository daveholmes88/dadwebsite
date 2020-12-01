import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import DanceIndex from './DanceIndex'

export default function EnglishCountry() {

    return (
        <Container>
            <Row className="justify-content-center">
                <DanceIndex />
                <Col>
                    <h1>English Country Dancing</h1>
                    <br></br>
                    <Row>
                        <Col>
                            <div style={{ width: '50%' }}>
                                <Image
                                    src='/Dance/ECDancers.jpg'
                                    alt='ECDancers'
                                    fluid='true'
                                    align='left'
                                    className='picture'
                                />
                            </div>
                            <div className='pull-right'>
                                <p>English Country Dancing is from another time and place. It's the stuff you see in the Jane Austen movies, though nowadays they skip the bows and curtsies. The dancing is genteel, the music sublime. I've lost you already, haven't I? But hear me out. Would you believe it's the most erotic thing I've ever done? English Country Dancing is intense, choreographed flirting. The Emma Woodhouses and Mr. John Knightlys of the world may have known more about the good life than we would have guessed.</p>
                                <p>It's all in the eye contact. Done right, you are constantly gazing deeply into the eyes of your partner of the moment. I remember a weekend workshop up in Wisconsin a few years ago. I showed up knowing no one. But the caller kept reminding us to keep eye contact, and the sense of intimacy in that room just soared. Between dances everyone was very friendly and we talked. By the end of the weekend I found myself rather fond of about 40 women. And the sense of flirting had gotten completely out of hand. Since you may only be with one partner for a few seconds, it seemed like an unending series of passionate encounters. Only with the eyes, of course, but still very intense.</p>
                                <p>The music is often live, played on violins, flutes, pianos, violas and a variety of string and acoustic instruments. The melodies are right out of the 17th century hit parade. Yet they also seem ageless. The music has a lilt and a charm to it you won't find on FM radio. If you play an appropriate instrument, you might find you'd rather be one of the players than one of the dancers. That weekend in Wisconsin I got to play at one of the dances. Wonderful fun.</p>
                                <p>(That picture at the top of the page? That was taken on St. Croix. A week of scuba diving and ocean kayaking and open air tour buses and dancing morning and night, with an ocean breeze wafting over us. Eat your heart out. Someday I'll find the pictures from England.)</p>
                                <p>The dances have odd names like Hole in the Wall, Freeford Gardens, and I Care Not For These Ladies. They are typically done in longways sets, a line of couples with the men and women facing each other across the set. Each dance has its own sequence, created out of the patterns that make up English Country Dancing. You may turn two hands with your partner (an exquisite sensation if done well) or cast off down the set. You might do a figure eight pattern or a hay for three. So there is a vocabulary to learn. Yet the dances are taught before they're danced, and you'll have the more experienced dancers helping you through it. You'll do fine. If there are moments when you feel confused and have to rely on the guidance of the more experienced dancers, just know that in time you'll feel more and more knowledgeable about what's going on.</p>
                                <p>Part of the joy is the flow of the dance, moving to the music and flowing from one pattern into the next. It may seem a small thing, but to time your patterns so you end each sequence on the right beat and flow effortlessly into the next moment creates an almost Zen-like joy. Your ability to do this will improve with time and increased confidence.</p>
                                <p>Some of the patterns are a bit challenging, puzzlements for the noggin. Then it becomes more like a team sport. Can everyone keep to the pattern and find their places? Can we all come out together? Daydreaming at such moments is frowned on. You have to keep your wits about you and look out for everyone. One moment you may find yourself helping your partner remember where to go next. The next moment it may be you being guided with a gentle touch in the right direction. When it all comes out right and you've pulled it off, you just might feel like cheering.</p>
                                <p>I'm afraid it's not very taxing. You are moving, which is good. But you won't work up a sweat. There are quicker ways to burn off the calories. But that does drop the barriers. Anyone can do this dancing, young and old, fit and not-so-fit. If you're looking for a way to leave the legions of the couch potatoes, this is an easy way to get started. Everyone in the village is welcome.</p>
                                <p>English Country Dancing transports you to a different time and a softer sensibility. And from there you may look back on this world with new eyes. In a world grown coarse, it’s hard to describe the sublime. How do you share the thrill of walking in time to music? It's such a simple thing. And yet when the music is sweet and tuneful, it lifts you and makes the dancing effortless. It is just walking, but it is such delicious walking. When the music is right and the ladies are smiling it almost seems like you're floating on air.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}