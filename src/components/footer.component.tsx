import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer className="b">
                <div className="b-flex media-flex">
                    <p className="links-info">Let's talk about <br /> design is my passion <br /> and the key to success</p>
                    <ul className="links-info">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                            <li>About Me</li>
                        </Link>
                        <Link to="/resume">
                            <li>My&nbsp;Resume</li>
                        </Link>
                        <Link to="/project">
                            <li>My&nbsp;Projects</li>
                        </Link>
                        <Link to="/githubapi">
                            <li>Github&nbsp;Api</li>
                        </Link>
                    </ul>
                </div>
                <div className="b-flex icon">
                    <div className="icons"><i className="fas fa-envelope"></i> <span>example@gmail.com</span> </div>
                    <div className="icons"><i className="fas fa-map-marker-alt"></i> <span>236, The Mall ,Faisalabad ,Punjab</span> </div>
                    <div className="icons"><i className="fas fa-phone-alt"></i> <span>+92-XXX-XXXXXXX</span> </div>
                </div>
                <div className="b-flex-social-icons">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github-alt"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="b-flex-copy">
                    <p>&copy; Copyright Deign by <Link to="/">Malik Front End Developer</Link></p>
                </div>
            </footer>
        </>
    )
}