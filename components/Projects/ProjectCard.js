function ProjectCard(props) {
  const project = {
    width: "240px",
    flex: "0 0 auto",
    borderRadius: "8px",
    background: props.backgroundGradient,
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
    <div style={project}>
      <div style={projectContent}>
        <img src={props.image} />
        <h4 className="font-display font-bold text-lg text-white">
          {props.projectTitle}
        </h4>
        <p className="font-body text-white opacity-75">
          {props.projectType} • {props.readTime}
        </p>
        <div style={iconBar}>
          <div style={icon}>
            <img src="/logos/article.svg" alt="article"></img>
          </div>
          <div style={icon}>
            <img src="/logos/jouwomgeving.svg" alt="article"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
