import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Intro from "../components/Intro";
import WhatIDo from "../components/WhatIDo";
import WhoIAm from "../components/WhoIAm";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import EndangeredAnimals from "../components/projects/EndangeredAnimals";
import TvShowSearch from "../components/projects/TvShowSearch";
import RetroVideoGameLibrary from "../components/projects/RetroVideoGameLibrary";
import SportsScoringApp from "../components/projects/SportsScoringApp";
import RockPaperScissors from "../components/projects/RockPaperScissors";
import Foodee from "../components/projects/Foodee";


const PortfolioContainer = () => {
    return (
        <>
            <header>
                <Logo />
                <NavBar />
            </header>

            <main>
                < Switch >
                    <Route exact path="/">
                        <Intro />
                        <WhatIDo />
                        <WhoIAm />
                        <Projects />
                    </Route>
                    <Route path="/foodee" component={Foodee}>
                    </Route>
                    <Route path="/endangered-animals" component={EndangeredAnimals}>
                        {/* <EndangeredAnimals /> */}
                    </Route>
                    <Route path="/tv-show-search" component={TvShowSearch}>
                        {/* <TvShowSearch /> */}
                    </Route>
                    <Route path="/retro-video-game-library" component={RetroVideoGameLibrary}>
                        {/* <RetroVideoGameLibrary /> */}
                    </Route>
                    <Route path="/sports-scoring-app" component={SportsScoringApp}>
                        {/* <SportsScoringApp /> */}
                    </Route>
                    <Route path="/rock-paper-scissors" component={RockPaperScissors}>
                        {/* <RockPaperScissors /> */}
                    </Route>
                </Switch >
            </main>

            <footer>
                <Footer />
            </footer>
        </>

    )
}

export default PortfolioContainer

