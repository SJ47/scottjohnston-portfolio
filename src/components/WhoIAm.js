import React from 'react'
import whoIamImage from "../static/images/scott-whangie.jpg"

const WhoIAm = () => {
    return (
        // < !--About me-- >
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">
                Software developer based in Scotland
            </p>

            <div className="about-me__body">
                <p>
                    As a recent <a href="https://codeclan.com/courses/professional-software-development/" target="_blank" rel="noreferrer">CodeClan</a>
        &nbsp;graduate in Professional Software Development, with a strong attention to detail, I am looking to
        further my hands on approach to problem solving and returning to my first and continued IT related passion in a
        software development role with a keen eye on Front-end Development.
                </p>
                <p>
                    I am well-versed in IT with a proven track
                    record
                    throughout my career with roles in System Programming, Windows Desktop and Server support and more recently as
                    an IT
                    Manager supporting sites throughout Europe.
                </p>
                <p>
                    I love learning new technologies and to be constantly challenged to solve problems and come up with innovative
                    solutions using my IT knowledge, experience and learning.
                </p>
            </div>

            <img src={whoIamImage} alt="Scott leaning on whangie monument" className="about-me__img" />

        </section>
    )
}

export default WhoIAm
