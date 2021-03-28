import React from 'react'

const NavBar = () => {
    return (

        <div className="navigation">

            <div className="navigation-sub">
                {/* <Switch>
                    <Route path="/endangered-animals">
                        <EndangeredAnimals />
                    </Route>
                </Switch>
                <Link to="/endangered-animals" className="item">Endangered</Link> */}

                <a href="/#services" className="item">My Services</a>
                <a href="/#about" className="item">About Me</a>
                <a href="/#projects" className="item">My Projects</a>
                <a href="#footer" className="item">Reach Out</a>
            </div>
        </div>
    );
}

export default NavBar
