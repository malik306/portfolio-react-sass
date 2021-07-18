import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoBrand from '../images/logo.svg';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [toggleClass, setToggleClass] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }
  const handleToggle = (e: any) => {
    if (e.target.classList.contains('fa-times')) {
      e.target.classList.remove('fa-times');
      e.target.classList.add('fa-bars');
      setToggleClass(!toggleClass);
    }
    else {
      e.target.classList.add('fa-times');
      e.target.classList.remove('fa-bars');
      setToggleClass(!toggleClass);
    }
  }
  return (
    <>
      <header className="nav">
        <nav className="nav__bar">
          <Link to="/" ><img src={logoBrand} alt="svg logo" /></Link>
          <button type="button" onClick={handleToggle} className="nav__bar__humburger">
            <i className="fas fa-2x fa-bars"></i>
          </button>
          <ul className={toggleClass ? "open-close" : ""}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Me</li>
            </Link>
            <Link to="resume">
              <li>My&nbsp;Resume</li>
            </Link>
            <Link to="project">
              <li>My&nbsp;Projects</li>
            </Link>
            <Link to="githubapi">
              <li>Github&nbsp;Api</li>
            </Link>
          </ul>
        </nav>
      </header>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", flexDirection: "column" }}>
        <p style={{ color: 'black', padding: '10px', }}>Inner Window Width is {windowWidth}px</p>
        <p style={{ color: 'black', padding: '10px', }}>Inner Window Height is {windowHeight}px</p>
      </div>

    </>
  );
}
