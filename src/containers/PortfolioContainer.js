import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

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
import GithubCorner from "react-github-corner";
import MyNotToDoList from "../components/projects/MyNotToDoList";


const PortfolioContainer = () => {

    const location = "https://github.com/sj47" + useLocation().pathname;

    return (
        <>
            <header>
                <Logo />
                <NavBar />
                <GithubCorner href={location} target="_blank" />
            </header>

            <main>
                < Switch >
                    <Route exact path="/">
                        <Intro />
                        <WhatIDo />
                        <WhoIAm />
                        <Projects />
                    </Route>
                    <Route path="/my-not-todo-list" component={MyNotToDoList} />
                    <Route path="/foodee" component={Foodee} />
                    <Route path="/endangered-animals" component={EndangeredAnimals} />
                    <Route path="/tv-show-search-app" component={TvShowSearch} />
                    <Route path="/retro-video-game-library" component={RetroVideoGameLibrary} />
                    <Route path="/sports-scoring-app" component={SportsScoringApp} />
                    <Route path="/rock-paper-scissors-game" component={RockPaperScissors} />
                </Switch >
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default PortfolioContainer
