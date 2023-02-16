import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import "./App.css"

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Admin from "./components/Admin";

import JoinMailList from "./components/Contact/JoinMailList";
import ContactBruce from "./components/Contact/ContactBruce";

import Becoming from "./components/Becoming/Becoming";
import BecomingAdvanced from "./components/Becoming/Advanced";
import BecomingTOC from "./components/Becoming/BecomingTOC";
import HowToOrder from "./components/Becoming/HowToOrder";
import Quotes from "./components/Becoming/Quotes";
import SamplePages from "./components/Becoming/SamplePages";

import SocialDance from "./components/Dance/SocialDance";
import Ballroom from "./components/Dance/Ballroom";
import Barn from "./components/Dance/Barn";
import EnglishCountry from "./components/Dance/EnglishCountry";
import Folk from "./components/Dance/Folk";
import Performance from "./components/Dance/Performance";
import ScottishCountry from "./components/Dance/ScottishCountry";
import Square from "./components/Dance/Square";
import Try from "./components/Dance/Try";
import SquareLessons from "./components/Dance/Lessons";


import MovementQuotes from "./components/Movement/Quotes";
import Aikido from "./components/Movement/Aikido"
import Juggling from "./components/Movement/Juggling"

import MarathonSong from "./components/Triathlon/MarathonSong";
import TriAthleteNutrition from "./components/Triathlon/TriAthleteNutrition";
import TriBike from "./components/Triathlon/TriBike";
import TriCramps from "./components/Triathlon/TriCramps";
import TriGadgets from "./components/Triathlon/TriGadgets";
import TriGear from "./components/Triathlon/TriGear";
import TriKnees from "./components/Triathlon/TriKnees";
import TriLearning from "./components/Triathlon/TriLearning";
import TriLengths from "./components/Triathlon/TriLengths";
import TriNutrition from "./components/Triathlon/TriNutrition";
import TriOpenWater from "./components/Triathlon/TriOpenWater";
import TriPicksPans from "./components/Triathlon/TriPicksPans";
import TriRaceDay from "./components/Triathlon/TriRaceDay";
import TriRaceNutrition from "./components/Triathlon/TriRaceNutrition";
import TriRules from "./components/Triathlon/TriRules";
import TriRun from "./components/Triathlon/TriRun";
import TriShoes from "./components/Triathlon/TriShoes";
import TriStrength from "./components/Triathlon/TriStrength";
import TriStretching from "./components/Triathlon/TriStretching";
import TriSuits from "./components/Triathlon/TriSuits";
import TriSwim from "./components/Triathlon/TriSwim";
import TriTraining from "./components/Triathlon/TriTraining";
import TriWarmup from "./components/Triathlon/TriWarmup";
import TriWarning from "./components/Triathlon/TriWarning";
import TriWeightLoss from "./components/Triathlon/TriWeightLoss";
import TriWetsuits from "./components/Triathlon/TriWetsuits";
import TriWhy from "./components/Triathlon/TriWhy";
import TriYou from "./components/Triathlon/TriYou";

import Feldenkrais from "./components/Feldenkrais/Home"
import Download from "./components/Feldenkrais/Download"
import History from "./components/Feldenkrais/History"
import Lessons from "./components/Feldenkrais/Lessons"
import PressQuotes from "./components/Feldenkrais/PressQuotes"
import UserQuotes from "./components/Feldenkrais/UserQuotes"
import PricePurchase from "./components/Feldenkrais/PricePurchase"
import FreeLesson from "./components/Feldenkrais/FreeLesson"
import Article from "./components/Feldenkrais/Article"

import Music from "./components/Music/Music"
import MusicPhoto from "./components/Music/MusicPhoto"
import PressBio from "./components/Music/PressBio"
import Life from "./components/Music/Life/Life"
import StoryOf from "./components/Music/Life/StoryOf"
import ConcertPhotos from "./components/Music/Life/ConcertPhotos"
import WesternSprings from "./components/Music/Life/WesternSprings"
import EvanstonReview from "./components/Music/Life/EvanstonReview"
import Old from "./components/Music/Old/Old"
import RickLibrarian from "./components/Music/Old/RickLibrarian"
import ChicagoTribune from "./components/Music/Old/ChicagoTribune"


import AnvilHome from "./components/SciFi/AnvilHome"
import AuthorQuotes from "./components/SciFi/AuthorQuotes"
import FanQuotes from "./components/SciFi/FanQuotes"
import FirstChapter from "./components/SciFi/FirstChapter"
import SwitchTime from "./components/SciFi/SwitchTime"
import AnvilOrder from "./components/SciFi/AnvilOrder"

import Shopping from "./components/Shopping/Shopping"
import ShoppingMusic from "./components/Shopping/Music"
import ShoppingTShirts from "./components/Shopping/TShirts"
import ShoppingSciFi from "./components/Shopping/SciFi"

import TwoCents from "./components/TwoCents/TwoCents"
import BathroomLaws from "./components/TwoCents/BathroomLaws"
import Covid from "./components/TwoCents/Covid"
import DeathWithDignity from "./components/TwoCents/DeathWithDignity"
import Energy from "./components/TwoCents/Energy"
import GayWedding from "./components/TwoCents/GayWedding"
import Health from "./components/TwoCents/Health"
import Marines from "./components/TwoCents/Marines"
import Prius from "./components/TwoCents/Prius"
import Prostitution from "./components/TwoCents/Prostitution"
import Romney from "./components/TwoCents/Romney"
import Smoking from "./components/TwoCents/Smoking"
import WindowsMac from "./components/TwoCents/WindowsMac"
import Wisdom from "./components/TwoCents/Wisdom"


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>

          <Route exact path='/admin' render={routerProps => <Admin />} />

          <Route exact path='/Becoming' render={routerProps => <Becoming />} />
          <Redirect exact from='/Becoming.html' to='/Becoming'/>
          <Route exact path='/BecomingAdvanced' render={routerProps => <BecomingAdvanced />} />
          <Route exact path='/BecomingTOC' render={routerProps => <BecomingTOC />} />
          <Redirect exact from='/BecomingTOC.html' to='/BecomingTOC'/>
          <Route exact path='/BecomingSPages' render={routerProps => <SamplePages />} />
          <Redirect exact from='/BecomingSPages.html' to='/BecomingSPages'/>
          <Route exact path='/BecomingQuotes' render={routerProps => <Quotes />} />
          <Redirect exact from='/BecomingQuotes.html' to='/BecomingQuotes'/>
          <Route exact path='/BecomingHowToOrder' render={routerProps => <HowToOrder />} />
          <Redirect exact from='/BecomingHowToOrder.html' to='/BecomingHowToOrder'/>

          <Route exact path='/MailList' render={routerProps => <JoinMailList />} />
          <Redirect exact from='/Touch/TouchMailList.html' to='/MailList'/>
          <Route exact path='/Contact' render={routerProps => <ContactBruce />} />
          <Redirect exact from='/Touch/TouchContact.html' to='/Contact'/>

          <Route exact path='/Dance/Social' render={routerProps => <SocialDance />} />
          <Redirect exact from='/Dance/DanceSocial.html' to='/Dance/Social'/>
          <Route exact path='/Dance/Ballroom' render={routerProps => <Ballroom />} />
          <Redirect exact from='/Dance/DanceBallroom.html' to='/Dance/Ballroom'/>
          <Route exact path='/Dance/Barn' render={routerProps => <Barn />} />
          <Redirect exact from='/Dance/DanceBarn.html' to='/Dance/Barn'/>
          <Route exact path='/Dance/ECD' render={routerProps => <EnglishCountry />} />
          <Redirect exact from='/Dance/DanceECD.html' to='/Dance/ECD'/>
          <Route exact path='/Dance/Folk' render={routerProps => <Folk />} />
          <Redirect exact from='/Dance/DanceFolk.html' to='/Dance/Folk'/>
          <Route exact path='/Dance/Performance' render={routerProps => <Performance />} />
          <Redirect exact from='/Dance/DancePerformance.html' to='/Dance/Performance'/>
          <Route exact path='/Dance/Scottish' render={routerProps => <ScottishCountry />} />
          <Redirect exact from='/Dance/DanceScottish.html' to='/Dance/Scottish'/>
          <Route exact path='/Dance/Square' render={routerProps => <Square />} />
          <Redirect exact from='/Dance/DanceSquare.html' to='/Dance/Square'/>
          <Route exact path='/Dance/Which' render={routerProps => <Try />} />
          <Redirect exact from='/Dance/DanceWhich.html' to='/Dance/Which'/>
          <Route exact path='/Dance/Lessons' render={routerProps => <SquareLessons />} />
          <Redirect exact from='/Dance/DanceBruceSD.html' to='/Dance/Lessons'/>

          <Route exact path='/Feldenkrais' render={routerProps => <Feldenkrais />} />
          <Redirect exact from='/Feldenkrais.html' to='/Feldenkrais'/>
          <Route exact path='/PayPalDReturn.html' render={routerProps => <Download />} />
          <Route exact path='/Feldenkrais/History' render={routerProps => <History />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisHistory.html' to='/Feldenkrais/History'/>
          <Route exact path='/Feldenkrais/LessonList' render={routerProps => <Lessons />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisLessonList.html' to='/Feldenkrais/LessonList'/>
          <Route exact path='/Feldenkrais/CDPressQuotes' render={routerProps => <PressQuotes />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisCDPressQuotes.html' to='/Feldenkrais/CDPressQuotes'/>
          <Route exact path='/Feldenkrais/CDUserQuotes' render={routerProps => <UserQuotes />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisCDUserQuotes.html' to='/Feldenkrais/CDUserQuotes'/>
          <Route exact path='/Feldenkrais/Price' render={routerProps => <PricePurchase />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisPrice.html' to='/Feldenkrais/Price'/>
          <Route exact path='/Feldenkrais/FreeLesson' render={routerProps => <FreeLesson />} />
          <Redirect exact from='/Feldenkrais/FeldenkraisFreeLesson.html' to='/Feldenkrais/FreeLesson'/>
          <Route exact path='/Feldenkrais/MosheFeldenkrais' render={routerProps => <Article />} />
          <Redirect exact from='/Feldenkrais/MosheFeldenkrais.html' to='/Feldenkrais/MosheFeldenkrais'/>

          <Route exact path='/Movement' render={routerProps => <MovementQuotes />} />
          <Redirect exact from='/Movement/Movement.html' to='/Movement'/>
          <Route exact path='/Movement/Aikido' render={routerProps => <Aikido />} />
          <Redirect exact from='/Movement/Aikido.html' to='/Movement/Aikido'/>
          <Route exact path='/Movement/Juggling' render={routerProps => <Juggling />} />
          <Redirect exact from='/Movement/Juggling.html' to='/Movement/Juggling'/>

          <Route exact path='/Music' render={routerProps => <Music />} />
          <Redirect exact from='/Music/Music.html' to='/Music'/>
          <Route exact path='/Music/Photos' render={routerProps => <MusicPhoto />} />
          <Redirect exact from='/Music/MusicPhotos.html' to='/Music/Photos'/>
          <Route exact path='/Music/PressBio' render={routerProps => <PressBio />} />
          <Redirect exact from='/Music/PressBio.html' to='/Music/PressBio'/>
          <Route exact path='/Music/Life' render={routerProps => <Life />} />
          <Redirect exact from='/Music/LifeMp3Player/MusicLife.html' to='/Music/Life'/>
          <Route exact path='/Music/LifeStory' render={routerProps => <StoryOf />} />
          <Redirect exact from='/Music/MusicLifeStory.html' to='/Music/LifeStory'/>
          <Route exact path='/Music/Concert2005' render={routerProps => <ConcertPhotos />} />
          <Redirect exact from='/Music/MusicConcert2005.html' to='/Music/Concert2005'/>
          <Route exact path='/Music/ReviewWesternSprings' render={routerProps => <WesternSprings />} />
          <Redirect exact from='/Music/ReviewWesternSprings.html' to='/Music/ReviewWesternSprings'/>
          <Route exact path='/Music/ReviewEvanston' render={routerProps => <EvanstonReview />} />
          <Redirect exact from='/Music/ReviewEvanston.html' to='/Music/ReviewEvanston'/>
          <Route exact path='/Music/OKR' render={routerProps => <Old />} />
          <Redirect exact from='/Music/OKRMp3Player/MusicOKR.html' to='/Music/OKR'/>
          <Route exact path='/Music/ReviewChiTribune' render={routerProps => <ChicagoTribune />} />
          <Redirect exact from='/Music/ReviewChiTribune.html' to='/Music/ReviewChiTribune'/>
          <Route exact path='/Music/ReviewRickLibrarian' render={routerProps => <RickLibrarian />} />
          <Redirect exact from='/Music/ReviewRickLibrarian.html' to='/Music/ReviewRickLibrarian'/>

          <Route exact path='/SciFi/Anvil' render={routerProps => <AnvilHome />} />
          <Redirect exact from='/SciFi/Anvil.html' to='/SciFi/Anvil'/>
          <Route exact path='/SciFi/AnvilQuotes' render={routerProps => <AuthorQuotes />} />
          <Redirect exact from='/SciFi/AnvilQuotes.html' to='/SciFi/AnvilQuotes'/>
          <Route exact path='/SciFi/AnvilFanQuotes' render={routerProps => <FanQuotes />} />
          <Redirect exact from='/SciFi/AnvilFanQuotes.html' to='/SciFi/AnvilFanQuotes'/>
          <Route exact path='/SciFi/AnvilChap1' render={routerProps => <FirstChapter />} />
          <Redirect exact from='/SciFi/AnvilChap1.html' to='/SciFi/AnvilChap1'/>
          <Route exact path='/SciFi/Switch' render={routerProps => <SwitchTime />} />
          <Redirect exact from='/SciFi/Switch.html' to='/SciFi/Switch'/>
          <Route exact path='/SciFi/AnvilOrder' render={routerProps => <AnvilOrder />} />

          <Route exact path='/Triathlon/MarathonSong' render={routerProps => <MarathonSong />} />
          <Redirect exact from='/Triathlon/Marathon/MarathonSong.html' to='/Triathlon/MarathonSong'/>
          <Route exact path='/Triathlon/AthleteNutrition' render={routerProps => <TriAthleteNutrition />} />
          <Redirect exact from='/Triathlon/TriAthleteNutrition.html' to='/Triathlon/AthleteNutrition'/>
          <Route exact path='/Triathlon/Bike' render={routerProps => <TriBike />} />
          <Redirect exact from='/Triathlon/TriBike.html' to='/Triathlon/Bike'/>
          <Route exact path='/Triathlon/Cramps' render={routerProps => <TriCramps />} />
          <Redirect exact from='/Triathlon/TriCramps.html' to='/Triathlon/Cramps'/>
          <Route exact path='/Triathlon/Gadgets' render={routerProps => <TriGadgets />} />
          <Redirect exact from='/Triathlon/TriGadgets.html' to='/Triathlon/Gadgets'/>
          <Route exact path='/Triathlon/Gear' render={routerProps => <TriGear />} />
          <Redirect exact from='/Triathlon/TriGear.html' to='/Triathlon/Gear'/>
          <Route exact path='/Triathlon/Knees' render={routerProps => <TriKnees />} />
          <Redirect exact from='/Triathlon/TriKnees.html' to='/Triathlon/Knees'/>
          <Route exact path='/Triathlon/Learning' render={routerProps => <TriLearning />} />
          <Redirect exact from='/Triathlon/TriLearning.html' to='/Triathlon/Learning'/>
          <Route exact path='/Triathlon/Lengths' render={routerProps => <TriLengths />} />
          <Redirect exact from='/Triathlon/TriLengths.html' to='/Triathlon/Lengths'/>
          <Route exact path='/Triathlon/Nutrition' render={routerProps => <TriNutrition />} />
          <Redirect exact from='/Triathlon/TriNutrition.html' to='/Triathlon/Nutrition'/>
          <Route exact path='/Triathlon/OpenWater' render={routerProps => <TriOpenWater />} />
          <Redirect exact from='/Triathlon/TriOpenWater.html' to='/Triathlon/OpenWater'/>
          <Route exact path='/Triathlon/PicksPans' render={routerProps => <TriPicksPans />} />
          <Redirect exact from='/Triathlon/TriPicksPans.html' to='/Triathlon/PicksPans'/>
          <Route exact path='/Triathlon/RaceDay' render={routerProps => <TriRaceDay />} />
          <Redirect exact from='/Triathlon/TriRaceDay.html' to='/Triathlon/RaceDay'/>
          <Route exact path='/Triathlon/RaceNutrition' render={routerProps => <TriRaceNutrition />} />
          <Redirect exact from='/Triathlon/TriRaceNutrition.html' to='/Triathlon/RaceNutrition'/>
          <Route exact path='/Triathlon/Rules' render={routerProps => <TriRules />} />
          <Redirect exact from='/Triathlon/TriRules.html' to='/Triathlon/Rules'/>
          <Route exact path='/Triathlon/Run' render={routerProps => <TriRun />} />
          <Redirect exact from='/Triathlon/TriRun.html' to='/Triathlon/Run'/>
          <Route exact path='/Triathlon/Shoes' render={routerProps => <TriShoes />} />
          <Redirect exact from='/Triathlon/TriShoes.html' to='/Triathlon/Shoes'/>
          <Route exact path='/Triathlon/Strength' render={routerProps => <TriStrength />} />
          <Redirect exact from='/Triathlon/TriStrength.html' to='/Triathlon/Strength'/>
          <Route exact path='/Triathlon/Stretching' render={routerProps => <TriStretching />} />
          <Redirect exact from='/Triathlon/TriStretching.html' to='/Triathlon/Stretching'/>
          <Route exact path='/Triathlon/Suits' render={routerProps => <TriSuits />} />
          <Redirect exact from='/Triathlon/TriSuits.html' to='/Triathlon/Suits'/>
          <Route exact path='/Triathlon/Swim' render={routerProps => <TriSwim />} />
          <Redirect exact from='/Triathlon/TriSwim.html' to='/Triathlon/Swim'/>
          <Route exact path='/Triathlon/Training' render={routerProps => <TriTraining />} />
          <Redirect exact from='/Triathlon/TriTraining.html' to='/Triathlon/Training'/>
          <Route exact path='/Triathlon/Warmup' render={routerProps => <TriWarmup />} />
          <Redirect exact from='/Triathlon/TriWarmup.html' to='/Triathlon/Warmup'/>
          <Route exact path='/Triathlon/Warning' render={routerProps => <TriWarning />} />
          <Redirect exact from='/Triathlon/TriWarning.html' to='/Triathlon/Warning'/>
          <Route exact path='/Triathlon/WeightLoss' render={routerProps => <TriWeightLoss />} />
          <Redirect exact from='/Triathlon/TriWEightLoss.html' to='/Triathlon/WeightLoss'/>
          <Route exact path='/Triathlon/Wet' render={routerProps => <TriWetsuits />} />
          <Redirect exact from='/Triathlon/TriWet.html' to='/Triathlon/Wet'/>
          <Route exact path='/Triathlon/Why' render={routerProps => <TriWhy />} />
          <Redirect exact from='/Triathlon/TriWhy.html' to='/Triathlon/Why'/>
          <Route exact path='/Triathlon/You' render={routerProps => <TriYou />} />
          <Redirect exact from='/Triathlon/TriYou.html' to='/Triathlon/You'/>

          <Route exact path='/TwoCents' render={routerProps => <TwoCents />} />
          <Redirect exact from='/TwoCents/TwoCents.html' to='/TwoCents'/>
          <Route exact path='/TwoCents/BathroomLaws' render={routerProps => <BathroomLaws />} />
          <Redirect exact from='/TwoCents/TwoBathroomLaws.html' to='/TwoCents/BathroomLaws'/>
          <Route exact path='/TwoCents/Covid19' render={routerProps => <Covid />} />
          <Redirect exact from='/TwoCents/TwoCovid19.html' to='/TwoCents/Covid19'/>
          <Route exact path='/TwoCents/Death' render={routerProps => <DeathWithDignity />} />
          <Redirect exact from='/TwoCents/TwoDeath.html' to='/TwoCents/Death'/>
          <Route exact path='/TwoCents/Energy' render={routerProps => <Energy />} />
          <Redirect exact from='/TwoCents/TwoEnergy.html' to='/TwoCents/Energy'/>
          <Route exact path='/TwoCents/GayWedding' render={routerProps => <GayWedding />} />
          <Redirect exact from='/TwoCents/TwoGayWedding.html' to='/TwoCents/GayWedding'/>
          <Route exact path='/TwoCents/HealthTips' render={routerProps => <Health />} />
          <Redirect exact from='/TwoCents/TwoHealthTips.html' to='/TwoCents/HealthTips'/>
          <Route exact path='/TwoCents/Marines' render={routerProps => <Marines />} />
          <Redirect exact from='/TwoCents/TwoMarines.html' to='/TwoCents/Marines'/>
          <Route exact path='/TwoCents/Prius' render={routerProps => <Prius />} />
          <Redirect exact from='/TwoCents/TwoPrius.html' to='/TwoCents/Prius'/>
          <Route exact path='/TwoCents/Prostitution' render={routerProps => <Prostitution />} />
          <Redirect exact from='/TwoCents/TwoProstitution.html' to='/TwoCents/Prostitution'/>
          <Route exact path='/TwoCents/Romney' render={routerProps => <Romney />} />
          <Redirect exact from='/TwoCents/TwoRomney.html' to='/TwoCents/Romney'/>
          <Route exact path='/TwoCents/Smoking' render={routerProps => <Smoking />} />
          <Redirect exact from='/TwoCents/TwoSmoking.html' to='/TwoCents/Smoking'/>
          <Route exact path='/TwoCents/WindowsVsMac' render={routerProps => <WindowsMac />} />
          <Redirect exact from='/TwoCents/TwoWindowsVsMac.html' to='/TwoCents/WindowsVsMac'/>
          <Route exact path='/TwoCents/Wisdom' render={routerProps => <Wisdom />} />
          <Redirect exact from='/TwoCents/TwoWisdom.html' to='/TwoCents/Wisdom'/>

          <Route exact path='/Shop/Shipping' render={routerProps => <Shopping />} />
          <Redirect exact from='/Shop/ShopShipping.html' to='/Shop/Shipping'/>
          <Route exact path='/Shop/SciFi' render={routerProps => <ShoppingSciFi />} />
          <Redirect exact from='/Shop/ShopSciFi.html' to='/Shop/SciFi'/>
          <Route exact path='/Shop/Music' render={routerProps => <ShoppingMusic />} />
          <Redirect exact from='/Shop/ShopMusic.html' to='/Shop/Music'/>
          <Route exact path='/Shop/TShirts' render={routerProps => <ShoppingTShirts />} />
          <Redirect exact from='/Shop/ShopTShirts.html' to='/Shop/TShirts'/>

          <Route path='/' render={routerProps => <Home />} />
          <Redirect exact from='/index.html' to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
