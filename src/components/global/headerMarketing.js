import { default as React, useContext, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import { Trans } from "react-i18next";

const HeaderMarketing = ({ header }) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  const [isActive, setActive] = useState(false);
  const [fix, setFix] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  const [dark, setDark] = useState(false);
  function setTheme(themeName) {
    localStorage.setItem("reboot_theme", themeName);
    document.documentElement.className = themeName;
  }
  function toggleTheme() {
    if (localStorage.getItem("reboot_theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }
  (function () {
    if (localStorage.getItem("reboot_theme") === "theme-dark") {
      setTheme("theme-dark");
      setDark.checked = false;
    } else {
      setTheme("theme-light");
      setDark.checked = true;
    }
  })();
  window.addEventListener("scroll", setFixed);

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            <PageLink className="navbar-brand" to="/react-project/greet-react">
              <h1 className="m-0">{header.logo}</h1>
              {/* <img className="img-fluid" src="" alt="logo"/> */}
            </PageLink>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <ul
                className={
                  locale === "ar"
                    ? "navbar-nav menu me-lg-auto"
                    : "navbar-nav menu ms-lg-auto"
                }
              >
                <li className="nav-item dropdown submenu">
                  <Link
                    activeclassName="active"
                    className="nav-link scroll dropdown-toggle"
                    to={header.home.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Trans i18nKey="headerMarketing.home.title">
                      {header.home.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeclassName="active"
                    className="benefits nav-link"
                    to={header.about.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerMarketing.about.title">
                      {header.about.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeclassName="active"
                    className="benefits nav-link"
                    to={header.service.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerMarketing.service.title">
                      {header.service.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeclassName="active"
                    className="benefits nav-link"
                    to={header.team.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerMarketing.team.title">
                      {header.team.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeclassName="active"
                    className="benefits nav-link"
                    to={header.testimonial.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerMarketing.testimonial.title">
                      {header.testimonial.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/contact-us">
                    Contact
                  </a>
                </li>
                <li
                  className="nav-item dropdown submenu"
                  title={t("language")}
                  id="basic-nav-dropdown"
                >
                  <Link
                    activeclassName="active"
                    className="nav-link scroll dropdown-toggle"
                    to="#"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {locale === "ar" ? "ar" : "en"}
                    <span onClick={handleToggle} className="sub-menu-toggle">
                      <GoChevronDown />
                    </span>
                  </Link>
                  <ul
                    className={
                      isActive ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <li className="nav-item" onClick={() => changeLocale("en")}>
                      <span className="nav-link">English</span>
                    </li>
                    <li className="nav-item" onClick={() => changeLocale("ar")}>
                      <span className="nav-link">Arabic</span>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="switch-box">
                    <label id="switch" className="switch">
                      <input
                        type="checkbox"
                        onChange={(e) => toggleTheme(dark)}
                        id="slider"
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default HeaderMarketing;
