import React, { useState, useEffect } from "react";
import { Outlet, Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
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
      navigate(`/#${sectionId}`, { state: { sectionId } });
      setClick(false); 
    }
  };

  const refreshPage = () => {
    navigate("/");
    window.location.reload(true);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const scrollOffset = -100; 

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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                }}
                className="nav-link"
              >
                03. Trending
              </RouterLink>
            ) : (
              <ScrollLink
                to="trending"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu}
              >
                03. Trending
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#upcoming"
                onClick={() => {
                  handleNavClick("upcoming");
                }}
                className="nav-link"
              >
                04. Upcoming
              </RouterLink>
            ) : (
              <ScrollLink
                to="upcoming"
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
                onClick={closeMenu}
              >
                04. Upcoming
              </ScrollLink>
            )}
          </li>
          <li>
            {isOtherPage ? (
              <RouterLink
                to="/#rated"
                onClick={() => {
                  handleNavClick("rated");
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
                onClick={closeMenu}
              >
                05. Top Rated
              </ScrollLink>
            )}
          </li>
        </ul>

        <div className="toggler" onClick={handleClick}>
          {click ? (
            <CloseOutlined style={{ fontSize: "20px", color: "var(--white)" }} />
          ) : (
            <AlignRightOutlined
              style={{ fontSize: "20px", color: "var(--white)" }}
            />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
