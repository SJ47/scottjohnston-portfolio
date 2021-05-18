import React from 'react'
import projImage from "../../static/images/rock-paper-scissors.png"
import ProjectPage from '../ProjectPage'

const RockPaperScissors = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="Rock, Paper, Scissors Game"
            subtitle="A simple game of Rock, Paper and Scissors"
            gitHubLink="https://github.com/SJ47/Rock-Paper-Scissors-Game"
            liveAppLink="https://rock-paper-scissors-sj.herokuapp.com/"
            projImage={projImage}
            techDescription="Python, Flask, PostgreSQL, HTML, CSS."
        >
        </ProjectPage>
    )
}

export default RockPaperScissors
