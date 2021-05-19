import React from 'react'

// This component acts as a template project page where individual project component files 
// will send props to this page so all project renders look the same

// Props passed in with example
// title = "A CodeClan Group Project"
// projectTitle = "Endangered Animals App"
// subtitle = "A Learning with CodeClan Project"
// gitHubLink = "https://github.com/SJ47/project_endangered_animals"
// liveAppLink = "https://endangered-animals.herokuapp.com"
// image = { projImage }
// techDescription = "React, JavaScript, HTML, CSS, Express, MongoDB and Leaflet.js."

const ProjectPage = (props) => {
    return (
        <div>
            <section className="intro">

                <h1 className="section__title section__title--intro">
                    {props.title} <strong>{props.projectTitle}
                    </strong>
                </h1>

                <a href={props.liveAppLink} target="_blank" rel="noreferrer">
                    <span className="project-button-live">Live Demo!</span></a>

                <p className="section__subtitle section__subtitle--intro">{props.subtitle}</p>
                <img src={props.projImage} alt="" className="project-intro__img"></img>

            </section>

            <div className="portfolio-item-individual">
                <div className="portfolio-item-individual-left">
                    <p className="tech-text-container"><span className="tech-text-reversed">Tech</span></p>
                    <p>{props.techDescription}</p>

                    <p className="tech-text-container"><span className="tech-text-reversed">Brief</span></p>
                    <p>{props.mvp}</p>

                    <p className="tech-text-container"><span className="tech-text-reversed">Learning</span></p>
                    <p>{props.learning}</p>
                </div>

                <div className="portfolio-item-individual-right">
                    {/* <a href={props.liveAppLink} target="_blank" rel="noreferrer"> */}
                    <img src={props.projImage} alt="portfolio project"></img>
                    {/* </a> */}
                </div>

                {/* <a href={props.liveAppLink} target="_blank" rel="noreferrer">
                    <button className="project-button">View Project Running Live!</button>
                </a> */}
                <p>View the <a href={props.gitHubLink} target="_blank" rel="noreferrer">source
        code on Github </a>
                    {/* <a className="social-list__link" href="https://github.com/sj47" target="_blank" rel="noreferrer"> */}
                    <i className="fab fa-github"></i>
                    {/* </a> */}
                </p>
            </div>
        </div>
    )
}

export default ProjectPage
