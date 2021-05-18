import React from 'react'
import projImage from "../../static/images/todo.png"
import ProjectPage from '../ProjectPage'

const MyNotToDoList = () => {
    // Ensure page starts at top when rendered
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    return (
        <ProjectPage
            title="A Solo Project"
            projectTitle="My Not ToDo List App"
            subtitle="Project To Develop MERN Stack Skills"
            gitHubLink="https://github.com/SJ47/my-not-todo-list"
            liveAppLink="https://todo.scottjohnston.dev"
            projImage={projImage}
            techDescription="React, JavaScript, MongoDB Atlas, RestAPI, Node, Express, HTML and CSS."
        >
        </ProjectPage>
    )
}

export default MyNotToDoList
