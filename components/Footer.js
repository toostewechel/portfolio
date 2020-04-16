function Footer() {
  return (
    <footer className="flex flex-row font-body">
      <div className="w-1/3">
        <h4 className="font-display font-semibold">Contact</h4>
        <p className="text-normal">0612647976</p>
        <p className="text-normal">info@snapshots.design</p>
      </div>
      <div className="w-1/3">
        <h4 className="font-display font-semibold">Locatie</h4>
        <p className="text-normal">Utrecht, Nederland</p>
      </div>
      <div className="w-1/3">
        <a
          href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
          target="_blank"
        >
          <img
            aria-hidden="true"
            src="/images/linkedin-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="LinkedIN"
          ></img>
          <span className="visually-hidden">
            LinkedIN profiel van Tom Oostewechel
          </span>
        </a>
        <a href="https://medium.com/@tomoostewechel" target="_blank">
          <img
            aria-hidden="true"
            src="/images/medium-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="Medium"
          ></img>
          <span className="visually-hidden">
            Medium profiel van Tom Oostewechel
          </span>
        </a>
        <a href="https://github.com/toostewechel" target="_blank">
          <img
            aria-hidden="true"
            src="/images/github-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="Github"
          ></img>
          <span className="visually-hidden">
            Github profiel van Tom Oostewechel
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
