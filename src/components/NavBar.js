import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link';
// import { NavLink as Link } from 'react-router-dom';

// import { Link } from "react-scroll"

const NavBar = () => {

    // const activeStyle = {
    //     borderBottom: "5px solid #e4c619",
    //     borderRight: "5px solid #e4c619",
    //     color: "grey",
    //     borderRadius: "50%",
    //     padding: ".3em .8em",
    // }

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    }

    return (

        <div className="navigation">

            <div className="navigation-sub">
                <Link
                    // activeClass="active"
                    spy="true"
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    // to="/services"
                    to="/#services"
                    scroll={el => scrollWithOffset(el, 78)}
                >
                    My Services
                </Link>

                <Link
                    // activeClass="active"
                    spy="true"
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    // to="about"
                    to="/#about"
                    scroll={el => scrollWithOffset(el, 78)}

                >
                    About Me
                </Link>

                <Link
                    // activeClass="active"
                    spy="true"
                    smooth={true}
                    offset={-55}
                    duration={1000}
                    // to="projects"
                    to="/#projects"
                    scroll={el => scrollWithOffset(el, 78)}
                >
                    My Projects
                </Link>

                <Link
                    // activeClass="active"
                    spy="true"
                    smooth={true}
                    offset={-55}
                    duration={1000}
                    // to="footer"
                    to="/#footer"
                    scroll={el => scrollWithOffset(el, 78)}
                >
                    Reach Out
                </Link>
            </div>
        </div >
    );
}

export default NavBar
