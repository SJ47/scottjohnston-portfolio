import React from 'react'

const Footer = () => {
    return (
        // < !--Footer -- >
        <footer className="footer" id="footer">
            <a href="mailto:hello@scottjohnston.dev" className="footer__link" >hello@scottjohnston.dev</a>
            <ul className="social-list">

                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/scott-johnston-it" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/sj47" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/scottJ_Dev" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>

                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io/scottjohnston" target="_blank" rel="noreferrer">
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
