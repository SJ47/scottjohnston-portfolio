import React from 'react'
import projImage from "../../static/images/endangered-animals-app.jpg"
import ProjectPage from '../ProjectPage'

const EndangeredAnimals = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Group Project"
            projectTitle="Endangered Animals App"
            subtitle="An educational app about endangered animals"
            gitHubLink="https://github.com/SJ47/project_endangered_animals"
            liveAppLink="https://endangered-animals.herokuapp.com"
            projImage={projImage}
            techDescription="React, JavaScript, HTML, CSS, Express, MongoDB and Leaflet.js."
        >
        </ProjectPage>
    )
}

export default EndangeredAnimals
