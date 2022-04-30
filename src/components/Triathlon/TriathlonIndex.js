import React from 'react';
import { Container, Col, Card, Image } from 'react-bootstrap'

export default function TriathlonIndex() {

    return (
        <Col sm={3}>
            <Card border='dark'>
                <Image
                    src='/Triathlon/USAT209W.jpg'
                    fluid='true'
                    alt='TriCoach'
                />
                <Container>
                    <a href='/Triathlon/Why'>Why Exercise</a>
                    <br></br>
                    <a href='/Triathlon/You'>You Could Try One</a>
                    <br></br>
                    <a href='/Triathlon/Learning'>How We Learn</a>
                    <br></br>
                    <a href='/Triathlon/Swim'>Swim</a>
                    <br></br>
                    <a href='/Triathlon/Bike'>Bike</a>
                    <br></br>
                    <a href='/Triathlon/Run'>Run</a>
                    <br></br>
                    <a href='/Triathlon/OpenWater'>Open Water Swims</a>
                    <br></br>
                    <a href='/Triathlon/Warmup'>Warmup/Cooldown</a>
                    <br></br>
                    <a href='/Triathlon/Wet'>Wetsuits</a>
                    <br></br>
                    <a href='/Triathlon/Suits'>Tech Wear & Tri Suits</a>
                    <br></br>
                    <a href="/Triathlon/Rules">Rules</a>
                    <br></br>
                    <a href="/Triathlon/Stretching">Stretching</a>
                    <br></br>
                    <a href="/Triathlon/Strength">Strength Training</a>
                    <br></br>
                    <a href="/Triathlon/Nutrition" target="_self">Nutrition Basics</a>
                    <br></br>
                    <a href="/Triathlon/WeightLoss" target="_self">Losing Weight</a>
                    <br></br>
                    <a href="/Triathlon/AthleteNutrition">Nutrition For Athletes</a>
                    <br></br>
                    <a href="/Triathlon/RaceNutrition">Race Nutrition</a>
                    <br></br>
                    <a href="/Triathlon/Lengths">Race Lengths</a>
                    <br></br>
                    <a href="/Triathlon/Training" target="_self">Training, Tapering</a>
                    <br></br>
                    <a href="/Triathlon/Cramps" target="_self">Cramps</a>
                    <br></br>
                    <a href="/Triathlon/Knees">Creaky Knees</a>
                    <br></br>
                    <a href="/Triathlon/Gadgets" target="_self">Gadgets</a>
                    <br></br>
                    <a href="/Triathlon/Shoes" target="_self">Running Shoes</a>
                    <br></br>
                    <a href="/Triathlon/Gear" target="_self">Gear Checklist</a>
                    <br></br>
                    <a href="/Triathlon/RaceDay" target="_self">Race Day</a>
                    <br></br>
                    <a href="/Triathlon/PicksPans" target="_self">Picks &amp; Pans</a>
                    <br></br>
                    <a href="/Triathlon/Warning">Warning Label</a>
                    <br></br>
                    <a href="/Triathlon/MarathonSong" target="_self">Marathon (the song)</a>
                    <br></br>
                    <br></br>
                    <a href="/Feldenkrais">Also Try Feldenkrais</a>
                </Container>
            </Card>
        </Col>
    )
}