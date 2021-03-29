import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

const NavBar = () => {

    const activeStyle = {
        borderBottom: "5px solid #e4c619",
        // borderRight: "5px solid #e4c619",
        // color: "grey",
        // borderRadius: "50%",
        // padding: ".3em .8em",
    }

    return (

        <div className="navigation">

            <div className="navigation-sub">
                <NavHashLink smooth to=
                    "/#services"
                    className="item"
                    activeClassName="activeRoute"
                    activeStyle={activeStyle}
                >
                    My Services
                </NavHashLink>

                <NavHashLink smooth to=
                    "/#about"
                    className="item"
                    activeClassName="activeRoute"
                    activeStyle={activeStyle}
                >
                    About Me
                </NavHashLink>

                <NavHashLink smooth to=
                    "/#projects"
                    className="item"
                    activeClassName="activeRoute"
                    activeStyle={activeStyle}
                >
                    My Projects
                </NavHashLink>

                <NavHashLink smooth to=
                    "/#footer"
                    className="item"
                    activeClassName="activeRoute"
                    activeStyle={activeStyle}
                >
                    Reach Out
                </NavHashLink>
            </div>
        </div>
    );
}

export default NavBar
