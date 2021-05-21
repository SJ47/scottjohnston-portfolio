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
        >
        </ProjectPage>
    )
}

export default ProjectTemplate
