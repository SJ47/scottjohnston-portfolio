import React from 'react'
import projImage from "../../static/images/retro-video-game-library.png"
import ProjectPage from '../ProjectPage'

const RetroVideoGameLibrary = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="Retro Video Game Library"
            subtitle="Using JavaScript to inject HTML into the DOM"
            gitHubLink="https://github.com/SJ47/Retro-Video-Game-Library"
            liveAppLink="https://retro-game-library.scottjohnston.dev/"
            projImage={projImage}
            techDescription="JavaScript to inject HTML and manipulate the DOM using JavaScript, HTML, CSS and the DOM."
        >
        </ProjectPage>
    )
}

export default RetroVideoGameLibrary
