import React from 'react'

const WhatIDo = () => {
    return (
        //   < !--My services-- >
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Front-End Development</h3>
                    <p>
                        Experience working with HTML, CSS, JavaScript, React and Leaflet.js library. Integrating and hosting on
                        Netlify and
                        Heroku platforms.
                    </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                    <h3>Back-End Development</h3>
                    <p>
                        Experience working with Python, Flask, Node Express, PostgreSQL, MongoDB and API Fetch. Integrating and
                        hosting on Heroku, MongoDB Atlas and Firestore platforms.
                    </p>
                </div>
                {/* <!-- / service --> */}

                <div className="service">
                    <h3>IT Management & Support</h3>
                    <p>
                        Over 20 years IT Management experience, servicing the IT infrastructure and support needs of regional sites
                        for a large corporate organisation.
                    </p>
                </div>
                {/* <!-- / service --> */}
            </div>
            {/* <!-- / services --> */}

            <a href="#projects" className="btn">My Projects</a>
        </section>

    )
}

export default WhatIDo
