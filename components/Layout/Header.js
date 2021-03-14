import Logo from "../../assets/logos/snapshots-logo.svg";

function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between ">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Portfolio - Tom Oostewechel"></img>
        </div>
        <div className="flex flex-row gap-6 self-center">
          <p className="font-display text-white text-sm">Home</p>
          <p className="font-display text-white text-sm">Portfolio</p>
          <p className="font-display text-white text-sm">About Me</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
