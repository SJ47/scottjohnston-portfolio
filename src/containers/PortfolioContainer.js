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

import ProjectPage from "../components/ProjectPage";

const PortfolioContainer = () => {

    const location = "https://github.com/sj47" + useLocation().pathname;

    // Loop through ProjectData and build out routes for each project
    const listOfProjectRoutes = ProjectData.map((project) => {
        return (
            <Route key={project.id} path={project.link}>
                <ProjectPage project={project} />
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

                </Switch >
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default PortfolioContainer
