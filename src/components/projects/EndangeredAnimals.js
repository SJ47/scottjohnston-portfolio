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
            mvp=
            {[<>
                <p>
                    A TV station are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.
                </p>

                <h4>MVP</h4>
                <ul>
                    <li>Use an API to bring in content or a database to store information.</li>
                    <li>View some educational content on endangered animals</li>
                    <li>Be able to interact with the page to move through different sections of content</li>
                    <li>Click on animal to get more information about the animal</li>
                    <li>Filter by animal</li>
                    <li>Filter by region</li>
                </ul>
                <h4>Extensions</h4>
                <ul>
                    <li>View a map of endangered animals</li>
                    <li>An interactive quiz</li>
                    <li>A user can favourite an animal and list favourite animals</li>
                </ul>
            </>]}



            learning="The following skills, knowledge, techniques were achieved during this project:"
        >
        </ProjectPage >
    )
}

export default EndangeredAnimals
