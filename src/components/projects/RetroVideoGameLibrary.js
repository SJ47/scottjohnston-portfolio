import React from 'react'
import projImage from "../../static/images/retro-video-game-library.png"
import ProjectPage from '../ProjectPage'

const RetroVideoGameLibrary = () => {
    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="Retro Video Game Library"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/codeclan_week6_weekend_homework"
            liveAppLink="https://retro-game-library.scottjohnston.dev/"
            projImage={projImage}
            techDescription="JavaScript to inject HTML and manipulate the DOM using JavaScript, HTML, CSS and the DOM."
        >
        </ProjectPage>
    )
}

export default RetroVideoGameLibrary
