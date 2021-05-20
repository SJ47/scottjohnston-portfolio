import React from 'react'
// import projImage from "../../static/images/foodee.png"
import ProjectPage from '../ProjectPage'


const ProjectTemplate = ({ project }) => {

    console.log("Projects from template: ", project);
    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            project={project}
        // title={project.title}
        // projectTitle={project.projectTitle}
        // subtitle={project.subtitle}
        // gitHubLink={project.gitHubLink}
        // liveAppLink={project.liveAppLink}
        // projImage={project.image}
        // techDescription={project.techDescription}
        >
        </ProjectPage>
    )
}

export default ProjectTemplate
