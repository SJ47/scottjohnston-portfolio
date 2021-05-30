import React from 'react'
// import logo from "../static/images/scottjohnston-dev-logo-flat-opt2.svg"
import logo from "../static/images/logo.png"

const Logo = () => {
    return (
        <div>
            <a href="./">
                <img className="logo" src={logo} alt={"scottjohnston.dev logo"} />
            </a>
        </div>
    )
}

export default Logo
