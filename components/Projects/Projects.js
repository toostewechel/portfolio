import ProjectCard from "./ProjectCard";

import Project1 from "../../assets/projects/design-for-accessibility.svg";
import Project2 from "../../assets/projects/standardizing-ehealth-content.svg";
import Project3 from "../../assets/projects/design-for-accessibility.svg";
import JouwOmgeving from "../../assets/logos/jouwomgeving.svg";
import Article from "../../assets/logos/article.svg";

const gradients = {
  purple: "linear-gradient(180deg, #D37EE6 0%, #4926AD 100%)",
  orange: "linear-gradient(180deg, #FFD78A 0%, #F4762D 100%)",
  green: "linear-gradient(184.82deg, #6FF7E8 3.89%, #1F7EA1 96.11%)",
  blue: "linear-gradient(180deg, #3913B8 0%, #336CC1 100%)",
};

function Projects() {
  const projectWrapper = {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(5, minmax(240px, 1fr))",
    overflowX: "scroll",
    marginTop: "-20px",
  };

  const project = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
    minWidth: "240px",
    height: "360px",
    borderRadius: "4px",
  };

  const projectContent = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    textAlign: "center",
  };

  const iconBar = {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    alignSelf: "center",
  };

  const icon = {
    width: "32px",
    height: "32px",
  };
  return (
    <div style={projectWrapper} className="p-0 md:p-4">
      <a href="#" className="hover:scale-110">
        <div style={project} className="card card:hover">
          <div
            style={{
              background: gradients.orange,
              borderRadius: "8px",
            }}
          >
            <div style={projectContent}>
              <img src={Project2} />
              <h4 className="font-display font-bold text-lg text-white">
                Standaardiseren van e-health content
              </h4>
              <p className="font-body text-white opacity-75">
                Case Study • 15 min
              </p>
              <div style={iconBar}>
                <div style={icon}>
                  <img src={Article} alt="article"></img>
                </div>
                <div style={icon}>
                  <img src={JouwOmgeving} alt="Jouw Omgeving"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="../../articles/toegankelijke-online-dienstverlening">
        <div style={project} className="card card:hover">
          <div
            style={{
              background: gradients.purple,
              borderRadius: "8px",
            }}
          >
            <div style={projectContent}>
              <img src={Project1} />
              <h4 className="font-display font-bold text-lg text-white">
                Ontwerpen voor toegankelijkheid
              </h4>
              <p className="font-body text-white opacity-75">
                Artikel • 15 min
              </p>
              <div style={iconBar}>
                <div style={icon}>
                  <img src={Article} alt="article"></img>
                </div>
                <div style={icon}>
                  <img src={JouwOmgeving} alt="Jouw Omgeving"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
