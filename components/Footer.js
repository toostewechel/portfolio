import LinkedIN from "../images/linkedin-logo.png";
import MediumLogo from "../images/medium-logo.png";
import GithubLogo from "../images/github-logo.png";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row font-body">
      <div className="w-1/3 mb-4">
        <h4 className="font-display font-semibold">Contact</h4>
        <p className="text-normal">info@snapshots.design</p>
      </div>
      <div className="w-1/3 mb-4">
        <h4 className="font-display font-semibold">Locatie</h4>
        <p className="text-normal">Utrecht, Nederland</p>
      </div>
      <div className="w-1/3">
        <div className="flex flex-row">
          <a
            href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center mr-2"
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            <img
              aria-hidden="true"
              src={LinkedIN}
              className="h-6 w-6"
              alt="LinkedIN"
            ></img>
            <span className="visually-hidden">
              LinkedIN profiel van Tom Oostewechel
            </span>
          </a>
          <a
            href="https://medium.com/@tomoostewechel"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center mr-2"
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            <img
              aria-hidden="true"
              src={MediumLogo}
              className="h-6 w-6"
              alt="Medium"
            ></img>
            <span className="visually-hidden">
              Medium profiel van Tom Oostewechel
            </span>
          </a>
          <a
            href="https://github.com/toostewechel"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center mr-2"
            style={{
              width: "48px",
              height: "48px",
            }}
          >
            <img
              aria-hidden="true"
              src={GithubLogo}
              className="h-6 w-6"
              alt="Github"
            ></img>
            <span className="visually-hidden">
              Github profiel van Tom Oostewechel
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
