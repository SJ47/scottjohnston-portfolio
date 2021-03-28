import React from 'react'
import projImage from "../../static/images/rock-paper-scissors.png"
import ProjectPage from '../ProjectPage'

const RockPaperScissors = () => {
    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="Rock, Paper, Scissors Game"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/Rock-Paper-Scissors-Game"
            liveAppLink="https://rock-paper-scissors-sj.herokuapp.com/"
            projImage={projImage}
            techDescription="Python, Flask, PostgreSQL, HTML, CSS."
        >
        </ProjectPage>
    )
}

export default RockPaperScissors
