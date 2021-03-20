import { useRouter } from "next/router";
import { useMediaQuery } from "beautiful-react-hooks";
import React, { useState, useEffect } from "react";

//import assets
import Logo from "../../assets/logos/snapshots-logo.svg";
import Home from "../../assets/icons/home.svg";
import Showcase from "../../assets/icons/cube.svg";
import About from "../../assets/icons/certificates.svg";
import Hamburger from "../../assets/icons/hamburger.svg";

function ActiveLink({ label, href, icon }) {
  const router = useRouter();
  const style = {
    background:
      router.pathname === href ? "rgba(255, 255, 255, 0.1)" : "transparent",
    boxShadow:
      router.pathname === href
        ? "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)"
        : "transparent",
    fontWeight: router.pathname === href ? "500" : "500",
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href).then(() =>
      window.scrollTo({
        top: "0",
      })
    );
  };

  return (
    <a href={href} onClick={handleClick}>
      <div
        style={style}
        className="flex flex-row gap-2 items-center p-2 rounded"
      >
        <img src={icon} alt="home" />
        <p className="font-display text-sm text-white">{label}</p>
      </div>
    </a>
  );
}

function Header() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    showMenu && (document.body.style.overflow = "hidden");
    !showMenu && (document.body.style.overflow = "unset");
  });

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (window.scrollY !== 0) {
      setIsTop(false);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsTop]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-10 w-full transition duration-200 px-2 py-2 md:py-3 md:px-3 ${
        !isTop ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <a href="/">
            <img src={Logo} alt="Portfolio - Tom Oostewechel"></img>
          </a>
        </div>
        {isLaptop ? (
          <div
            id="nav-content"
            className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
          >
            <div className="flex-grow flex gap-6 justify-end">
              <ActiveLink icon={Home} label="Home" href="/" />
              <ActiveLink icon={About} label="Over mij" href="/contact" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <img src={Hamburger}></img>
              ) : (
                <img src={Hamburger}></img>
              )}
            </button>
          </div>
        )}
      </div>
      {showMenu && (
        <div className="w-full py-4 h-screen block flex-grow bg-background lg:items-center lg:w-auto lg:hidden">
          <div className="lg:flex-grow lg:flex lg:justify-center ">
            <div className="mb-2">
              <ActiveLink icon={Home} label="Home" href="/" />
            </div>
            <ActiveLink icon={About} label="Over mij" href="/contact" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
