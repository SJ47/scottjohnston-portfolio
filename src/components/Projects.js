import React from 'react'
import Thumbnail from "./Thumbnail";
import projEndangeredAnimalsImage from "../static/images/endangered-animals-app.jpg"
import projTvShowSearchImage from "../static/images/tv-show-search-app.jpg"
import projRetroVideoGameLibraryImage from "../static/images/retro-video-game-library.png"
import projSportsScoringImage from "../static/images/sports-scoring-app.png"
import projRockPaperScissorsImage from "../static/images/rock-paper-scissors.png"
import projFoodeeImage from "../static/images/foodee.png"
import projTodoImage from "../static/images/todo.png"

const Projects = () => {
    return (
        // < !--My Work-- >
        <section className="my-work" id="projects">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">
                A selection of my latest projects
    </p>

            <div className="portfolio">

                <Thumbnail className="thumbnail"
                    link="/foodee"
                    image={projFoodeeImage}
                    title="Foodee"
                    category="Web App for Mobile"
                    description="Tech: Java, Java Spring Framework, React, JavaScript, HTML, CSS, Leaflet.js and Stripe Integration."
                />

                <Thumbnail className="thumbnail"
                    link="/endangered-animals"
                    image={projEndangeredAnimalsImage}
                    title="Endangered Animals"
                    category="Web App"
                    description="Tech: React, JavaScript, HTML, CSS, Express, MongoDB and Leaflet.js."
                />

                <Thumbnail className="thumbnail"
                    link="/my-not-todo-list"
                    image={projTodoImage}
                    title="My Not ToDo List"
                    category="Web App"
                    description="React, JavaScript, MongoDB Atlas, RestAPI, Node, Express, HTML and CSS."
                />

                <Thumbnail className="thumbnail"
                    link="/tv-show-search-app"
                    image={projTvShowSearchImage}
                    title="TV Show Search"
                    category="Web App"
                    description="Tech: React, JavaScript, HTML, CSS and fetching external API data from TVMaze."
                />

                <Thumbnail className="thumbnail"
                    link="/retro-video-game-library"
                    image={projRetroVideoGameLibraryImage}
                    title="Retro Video Game Library"
                    category="Web App"
                    description="Tech: JavaScript to inject HTML and manipulate the DOM using JavaScript, HTML, CSS and the DOM."
                />

                <Thumbnail className="thumbnail"
                    link="/sports-scoring-app"
                    image={projSportsScoringImage}
                    title="Sports Scoring App"
                    category="Web App"
                    description="Tech: Python, Flask, PostgreSQL, HTML, CSS."
                />

                <Thumbnail className="thumbnail"
                    link="/rock-paper-scissors-game"
                    image={projRockPaperScissorsImage}
                    title="Rock, Paper & Scissors"
                    category="Web Game"
                    description="Tech: Python, Flask, HTML, CSS."
                />

            </div>
        </section>
    )
}

export default Projects
