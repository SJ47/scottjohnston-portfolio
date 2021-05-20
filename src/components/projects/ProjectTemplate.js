import React from 'react'
import projImage from "../../static/images/foodee.png"
import ProjectPage from '../ProjectPage'


const ProjectTemplate = ({ projects }) => {

    console.log("Projects from template: ", projects);
    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title={projects[0].title}
            projectTitle={projects[2].projectTitle}
            subtitle="A food & drink table service ordering app"
            gitHubLink="https://github.com/SJ47/foodee"
            liveAppLink="https://foodee.scottjohnston.dev"
            projImage={projImage}
            techDescription="Java, Java Spring Framework, React, JavaScript, HTML, CSS, Leaflet.js and Stripe Integration."
        >
        </ProjectPage>
    )
}

export default ProjectTemplate
