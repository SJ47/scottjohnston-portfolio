import React from 'react'
import demoImage from "../static/images/demo.jpeg"

const ProjectPage = ({ project }) => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // map through tech description and assign a class around each technology
    const tempTech = project.techDescription.split(" | ")
    const techItems = tempTech.map((techItem, index) => {
        return (
            <div key={index} className="tech-item">
                {techItem}
            </div>
        )
    })

    return (
        <div>
            <section className="intro"> {/*  grid */}

                <h1 className="section__title section__title--intro">
                    {project.projectTeam}<strong>{project.projectTitle}
                    </strong>
                </h1>

                <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
                <img src={project.image} alt="" className="project-intro__img"></img>
            </section>

            <span className="demo-image-container">

                <a href={project.liveAppLink} target="_blank" rel="noreferrer">
                    <img src={demoImage} className="demo-image" alt="demo" />
                </a>
            </span>

            <div className="project-main-container">

                <main className="left-container">

                    <p className="text-headings">
                        <span>brief</span>
                    </p>
                    <p className="first-letter" dangerouslySetInnerHTML={{ __html: project.brief }} />

                    <p className="text-headings">
                        <span>
                            learning
                        </span>
                    </p>
                    <p className="first-thing" dangerouslySetInnerHTML={{ __html: project.learning }} />
                </main>

                <aside className="right-container">
                    <p className="text-headings">
                        <span>technology</span>
                    </p>

                    <span>{techItems}</span>

                    <div className="image-container">
                        <img className="image-right" src={project.image} alt="portfolio project"></img>
                    </div>


                </aside>
            </div>


        </div >
    )
}

export default ProjectPage
