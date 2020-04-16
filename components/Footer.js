function Footer() {
  return (
    <footer className="flex flex-row font-body">
      <div className="w-1/3">
        <h3 className="font-display font-semibold">Contact</h3>
        <p className="text-normal">0612647976</p>
        <p className="text-normal">info@snapshots.design</p>
      </div>
      <div className="w-1/3">
        <h3 className="font-display font-semibold">Locatie</h3>
        <p className="text-normal">Utrecht, Nederland</p>
      </div>
      <div className="w-1/3">
        <a
          href="https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
          target="_blank"
        >
          <img
            src="/images/linkedin-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="LinkedIN"
          ></img>
        </a>
        <a href="https://medium.com/@tomoostewechel" target="_blank">
          <img
            src="/images/medium-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="Medium"
          ></img>
        </a>
        <a href="https://github.com/toostewechel" target="_blank">
          <img
            src="/images/github-logo.png"
            className="w-6 h-6 inline-flex mr-2"
            title="GitHub"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
