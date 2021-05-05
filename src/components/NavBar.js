import React from 'react'
// import { NavHashLink as Link } from 'react-router-hash-link';
import { Link } from "react-scroll"

const NavBar = () => {

    // const activeStyle = {
    //     borderBottom: "5px solid #e4c619",
    //     borderRight: "5px solid #e4c619",
    //     color: "grey",
    //     borderRadius: "50%",
    //     padding: ".3em .8em",
    // }

    return (

        <div className="navigation">

            <div className="navigation-sub">
                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    to="services"
                >
                    My Services
                </Link>

                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    to="about"
                >
                    About Me
                </Link>

                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={1000}
                    to="projects"
                >
                    My Projects
                </Link>

                <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={1000}
                    to="footer"
                >
                    Reach Out
                </Link>
            </div>
        </div >
    );
}

export default NavBar
