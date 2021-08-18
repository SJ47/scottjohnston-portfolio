import React from 'react';
import { Link } from "react-router-dom"

const Thumbnail = ({ project }) => {
    return (
        <div className="project" id="projects">

            <section className="sub-section-alternative" id="projects">
                <div className="project-container">
                    <div className="project-card">
                        <div className="flip-card-front">
                            <h3 className="card-title">{project.projectName}
                                <span className="corner-fold-behind"> &#9701;</span>
                                <span className="corner-fold-text">...</span>
                            </h3>
                            <img className="project-image" src={project.image} alt="Project title" />
                            <div>
                                <p className="subtext">
                                    <span className="tech-text">Tech</span>
                                    {project.techDescription}
                                </p>
                            </div>
                            <hr />
                            {/* <p className="subtext"><Link to={project.link} className="project-link" id={project.id}>Learn more <i className="fas fa-angle-right"></i></Link></p> */}
                            <p className="subtext project-link">Learn more <i className="fas fa-angle-double-right"></i></p>
                        </div>
                        <div className="flip-card-back">
                            <h3 className="card-title">{project.projectName}</h3>
                            <div>
                                <div className="subtext">
                                    <p className="tech-text">Brief</p>
                                    {project.miniBrief ? <p className="card-back-text">{project.miniBrief}</p> :
                                        <p className="card-back-text">{project.brief}</p>}
                                    <hr className="subtext-hr" />
                                    <p className="subtext subtext-link"><Link to={project.link} className="project-link" id={project.id}>Project page <i className="fas fa-arrow-right"></i></Link></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Thumbnail
