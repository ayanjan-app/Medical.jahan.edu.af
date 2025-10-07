import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home", ref: useRef() },
    { path: "/services", label: "Services", ref: useRef() },
    { path: "/visionandmission", label: "Vision & Mission", ref: useRef() },
    { path: "/doctorprofile", label: "Doctors", ref: useRef() },
    { path: "/contact", label: "Contact Us", ref: useRef() }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current route
  useEffect(() => {
    navLinks.forEach(link => {
      if (link.path === location.pathname) {
        link.ref.current.classList.add("active");
      } else {
        link.ref.current.classList.remove("active");
      }
    });
  }, [location]);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <header className={`navbar navbar-expand-xl sticky-top ${scrolled ? 'navbar-scrolled' : 'navbar-light'} bg-light`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="/Images/logo.png"
              alt="Company Logo"
              height="60"
              width="60"
              className="d-inline-block align-top"
            />
            <span className="brand-text"> Jahan (MD program)</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleNavToggle}
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={link.path}
                    className="nav-link"
                    ref={link.ref}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;