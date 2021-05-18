import React from 'react';
import { Link } from "react-router-dom"

const Thumbnail = (props) => {
    return (
        <div className="project" id="projects">

            <section className="sub-section-alternative" id="projects">
                <div className="project-container">
                    <div className="project-card">
                        <h3 className="card-title">{props.title}</h3>
                        <img className="project-image" src={props.image} alt="Project One" />
                        <div>
                            <p className="subtext">
                                <span class="tech-text">Tech</span>
                                {props.description}
                            </p>
                        </div>
                        <hr />
                        <p className="subtext"><Link to={props.link} className="project-link" >View here</Link></p>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Thumbnail
