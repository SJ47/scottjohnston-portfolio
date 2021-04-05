import React from 'react'
import projImage from "../../static/images/sports-scoring-app.png"
import ProjectPage from '../ProjectPage'

const SportsScoringApp = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="Sports Scoring App"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/Sports-Scoring-App"
            liveAppLink="https://sports-scoring-app.herokuapp.com/"
            projImage={projImage}
            techDescription="Python, Flask, PostgreSQL, HTML, CSS."
        >
        </ProjectPage>
    )
}

export default SportsScoringApp
