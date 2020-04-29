import Logo from "../images/logo.svg";

function Header() {
  return (
    <header>
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10"
          src={Logo}
          alt="Portfolio - Tom Oostewechel"
        ></img>
      </div>
    </header>
  );
}

export default Header;
