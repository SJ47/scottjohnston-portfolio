import React from 'react'
import Thumbnail from "./Thumbnail";

const Projects = ({ projects }) => {

    // Loop through ProjectData and build out cards for each project object
    const listOfProjects = projects.map((project) => {
        return (
            <Thumbnail
                key={project.id}
                className="thumbnail"
                link={project.link}
                image={project.image}  // works with images in public folder
                title={project.projectName}
                category={project.category}
                description={project.techDescription}
            />
        )
    })

    return (
        <section className="my-work" id="projects">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">
                A selection of my latest projects
            </p>

            <div className="portfolio">
                {listOfProjects}
            </div>
        </section>
    )
}

export default Projects
