import React from "react";
import introImage from "../static/images/scott-photo-white-bg-less-background.png"

const Intro = () => {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Scott Johnston</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">full-stack dev</p>
            <img src={introImage} alt="Scott Johnston smiling" className="intro__img" />
        </section>
    )
}

export default Intro
