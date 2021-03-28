import React from 'react'
import projImage from "../../static/images/endangered-animals-app.jpg"
import ProjectPage from '../ProjectPage'

const EndangeredAnimals = () => {
    return (
        <ProjectPage
            title="A CodeClan Group Project"
            projectTitle="Endangered Animals App"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/project_endangered_animals"
            liveAppLink="https://endangered-animals.herokuapp.com"
            projImage={projImage}
            techDescription="React, JavaScript, HTML, CSS, Express, MongoDB and Leaflet.js."
        >
        </ProjectPage>
    )
}

export default EndangeredAnimals
