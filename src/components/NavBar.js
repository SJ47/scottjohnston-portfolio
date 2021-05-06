import React, { useEffect } from 'react'
import { NavHashLink as Link } from 'react-router-hash-link';
// import { NavLink as Link } from 'react-router-dom';

// import { Link } from "react-scroll"

const NavBar = () => {

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const removeActiveLinks = () => {
        document.querySelector(".activeServices").classList.remove("active-nav-link")
        document.querySelector(".activeAbout").classList.remove("active-nav-link")
        document.querySelector(".activeProjects").classList.remove("active-nav-link")
        document.querySelector(".activeFooter").classList.remove("active-nav-link")
    }

    const handleScroll = () => {
        const idServices = document.getElementById("services")
        const idAbout = document.getElementById("about")
        const idProjects = document.getElementById("projects")
        const idFooter = document.getElementById("footer")


        // Check services section
        if (window.scrollY > idServices.offsetTop - 80 && window.scrollY < (idServices.offsetTop - 80 + idServices.offsetHeight)) {
            console.log("Inside services section");

            if (document.querySelector(".activeServices").classList[1] !== "active-nav-link") {
                removeActiveLinks();
                document.querySelector(".activeServices").classList.add("active-nav-link")
            }
        }

        // Check about section
        if (window.scrollY > idAbout.offsetTop - 80 && window.scrollY < (idAbout.offsetTop - 80 + idAbout.offsetHeight)) {
            console.log("Inside about section");

            if (document.querySelector(".activeAbout").classList[1] !== "active-nav-link") {
                removeActiveLinks();
                document.querySelector(".activeAbout").classList.add("active-nav-link")
            }
        }

        // Check projects section
        if (window.scrollY > idProjects.offsetTop - 80 && window.scrollY < (idProjects.offsetTop - 80 + idProjects.offsetHeight)) {
            console.log("Inside projects section");

            if (document.querySelector(".activeProjects").classList[1] !== "active-nav-link") {
                removeActiveLinks();
                document.querySelector(".activeProjects").classList.add("active-nav-link")
            }
        }

        // Check footer section
        if (window.scrollY > idFooter.offsetTop - 80 && window.scrollY < (idFooter.offsetTop - 80 + idFooter.offsetHeight)) {
            console.log("Inside footer section");

            if (document.querySelector(".activeFooter").classList[1] !== "active-nav-link") {
                removeActiveLinks();
                document.querySelector(".activeFooter").classList.add("active-nav-link")
            }
        }
    }

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
        // console.log(document.querySelector("a.active"));
    }

    return (

        <div className="navigation">

            <div className="navigation-sub">
                <Link
                    // activeClassName="services"
                    // activeClass="active"
                    spy="true"
                    smooth={true}
                    offset={-60}
                    duration={1000}
                    // to="/services"
                    to="/#services"
                    scroll={el => scrollWithOffset(el, 78)}
                    className="activeServices"
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
                    className="activeAbout"
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
                    className="activeProjects"
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
                    className="activeFooter"
                >
                    Reach Out
                </Link>
            </div>
        </div >
    );
}

export default NavBar
