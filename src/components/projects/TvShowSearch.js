import React from 'react'
import projImage from "../../static/images/tv-show-search-app.jpg"
import ProjectPage from '../ProjectPage'

const TvShowSearch = () => {

    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A CodeClan Solo Project"
            projectTitle="TV Show Search App"
            subtitle="A Learning with CodeClan Project"
            gitHubLink="https://github.com/SJ47/TV-Show-Search-App"
            liveAppLink="https://tv-show-search.scottjohnston.dev/"
            projImage={projImage}
            techDescription="React, JavaScript, HTML, CSS and fetching external API data from TVMaze."
        >
        </ProjectPage>
    )
}

export default TvShowSearch
