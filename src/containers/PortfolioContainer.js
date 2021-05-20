import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import GithubCorner from "react-github-corner";

import ProjectData from "../data.json"

import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Intro from "../components/Intro";
import WhatIDo from "../components/WhatIDo";
import WhoIAm from "../components/WhoIAm";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

// import EndangeredAnimals from "../components/projects/EndangeredAnimals";
// import TvShowSearch from "../components/projects/TvShowSearch";
// import RetroVideoGameLibrary from "../components/projects/RetroVideoGameLibrary";
// import SportsScoringApp from "../components/projects/SportsScoringApp";
// import RockPaperScissors from "../components/projects/RockPaperScissors";
// import Foodee from "../components/projects/Foodee";
// import MyNotToDoList from "../components/projects/MyNotToDoList";

import ProjectTemplate from "../components/projects/ProjectTemplate";

const PortfolioContainer = () => {

    const location = "https://github.com/sj47" + useLocation().pathname;

    // Loop through ProjectData and build out routes for each project
    const listOfProjectRoutes = ProjectData.map((project) => {
        return (
            <Route path={project.link}>
                <ProjectTemplate project={project} />
            </Route>
        )
    })


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
                        <Projects projects={ProjectData} />
                    </Route>

                    {listOfProjectRoutes}

                    {/* <Route path="/my-not-todo-list" component={MyNotToDoList} />
                    <Route path="/foodee" component={Foodee} />
                    <Route path="/endangered-animals" component={EndangeredAnimals} />
                    <Route path="/tv-show-search-app" component={TvShowSearch} />
                    <Route path="/retro-video-game-library" component={RetroVideoGameLibrary} />
                    <Route path="/sports-scoring-app" component={SportsScoringApp} />
                    <Route path="/rock-paper-scissors-game" component={RockPaperScissors} /> */}

                    {/* <Route path="/foodee">
                        <ProjectTemplate project={ProjectData[0]} />
                    </Route>

                    <Route path="/endangered-animals">
                        <ProjectTemplate project={ProjectData[1]} />
                    </Route> */}

                    {/* <Route path={ProjectData.link}> */}
                    {/* <ProjectTemplate project={ProjectData[2]} id="2" /> */}
                    {/* </Route> */}
                </Switch >
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default PortfolioContainer
