function ProjectCard(props) {
  const Project = {
    width: "240px",
    flex: "0 0 auto",
    borderRadius: "8px",
    background: props.backgroundGradient,
  };

  const ProjectContent = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={Project}>
      <div style={ProjectContent}>
        <img src={props.image} />
        <h4 className="font-display font-bold text-lg text-white">
          {props.projectTitle}
        </h4>
        <p className="font-body text-white opacity-75">
          {props.projectType} • {props.readTime}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
