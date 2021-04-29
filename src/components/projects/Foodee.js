import React from 'react'
import projImage from "../../static/images/foodee.png"
import ProjectPage from '../ProjectPage'


const Foodee = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Group Project"
            projectTitle="Foodee App"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/foodee"
            // liveAppLink="https://foodee-client.herokuapp.com"
            liveAppLink="https://foodee.scottjohnston.dev"
            projImage={projImage}
            techDescription="Java, Java Spring Framework, React, JavaScript, HTML, CSS, Leaflet.js and Stripe Integration."
        >
        </ProjectPage>
    )
}

export default Foodee
