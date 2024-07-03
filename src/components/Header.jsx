import React, { useState, useEffect } from "react";
import { Outlet, Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { CloseOutlined, AlignRightOutlined } from "@ant-design/icons";

const Header = ({ isOtherPage }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    if (isOtherPage) {
      navigate(`/#${sectionId}`);
      setClick(false); // Close the menu after navigation
    }
  };

  function refreshPage() {
    navigate("/");
    window.location.reload(true);
  }

  const closeMenu = () => {
    setClick(false);
  };

  const scrollOffset = -80; // Adjust this offset based on your design (account for header height, etc.)

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <RouterLink to="/" onClick={refreshPage} className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">KH MOVIES</span>
          <span className="grey-color">/&gt;</span>
        </RouterLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#popular"
                onClick={() => {
                  handleNavClick("popular");
                  closeMenu(); // Close the menu after navigation
                }}
                className="nav-link"
              >
                01. Popular
              </RouterLink>
            ) : (
              <ScrollLink
                to="popular"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu} // Close the menu after navigation
              >
                01. Popular
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#playing"
                onClick={() => {
                  handleNavClick("playing");
                  closeMenu(); // Close the menu after navigation
                }}
                className="nav-link"
              >
                02. Now Playing
              </RouterLink>
            ) : (
              <ScrollLink
                to="playing"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu} // Close the menu after navigation
              >
                02. Now Playing
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#trending"
                onClick={() => {
                  handleNavClick("trending");
                  closeMenu(); // Close the menu after navigation
                }}
                className="nav-link"
              >
                03. Treding
              </RouterLink>
            ) : (
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu} // Close the menu after navigation
              >
                03. Treding
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#upcoming"
                onClick={() => {
                  handleNavClick("upcoming");
                  closeMenu(); // Close the menu after navigation
                }}
                className="nav-link"
              >
                04. Upcomming
              </RouterLink>
            ) : (
              <ScrollLink
                to="upcoming"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu} // Close the menu after navigation
              >
                04. Upcomming
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#rated"
                onClick={() => {
                  handleNavClick("rated");
                  closeMenu(); // Close the menu after navigation
                }}
                className="nav-link"
              >
                05. Top Rated
              </RouterLink>
            ) : (
              <ScrollLink
                to="rated"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu} // Close the menu after navigation
              >
                05. Top Rated
              </ScrollLink>
            )}
          </li>
          {/* <li>
            <RouterLink to="/volunteer" className="nav-link">
              05. Top Rate
            </RouterLink>
          </li> */}
        </ul>

        <div className="toggler" onClick={handleClick}>
          {click ? (
            <CloseOutlined
              style={{ fontSize: "20px", color: "var(--night-rider)" }}
            />
          ) : (
            <AlignRightOutlined
              style={{ fontSize: "20px", color: "var(--night-rider)" }}
            />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;