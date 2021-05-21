import React from 'react'


const ProjectPage = ({ project }) => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <div>
            <section className="intro">

                <h1 className="section__title section__title--intro">
                    {project.projectTeam}<strong>{project.projectTitle}
                    </strong>
                </h1>

                <a href={project.liveAppLink} target="_blank" rel="noreferrer">
                    <span className="project-button-live">Live Demo!</span></a>

                <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
                <img src={project.image} alt="" className="project-intro__img"></img>

            </section>

            <div className="portfolio-item-individual">
                <div className="portfolio-item-individual-left">
                    <p className="tech-text-container"><span className="tech-text-reversed">Tech</span>{project.techDescription}</p>

                    <p className="tech-text-container"><span className="tech-text-reversed">Brief</span>{project.brief}</p>
                    {/* <p>{project.brief}</p> */}

                    {/* <p className="tech-text-container"><span className="tech-text-reversed">Learning</span>{project.learning}</p> */}
                    {/* <p>{project.learning}</p> */}
                </div>

                <div className="portfolio-item-individual-right">
                    <img src={project.image} alt="portfolio project"></img>
                </div>

                {/* <p>View the <a href={project.gitHubLink} target="_blank" rel="noreferrer">source
        code on Github </a>
                    <i className="fab fa-github"></i>
                </p> */}

            </div>
        </div >
    )
}

export default ProjectPage
