import ProjectCard from "./ProjectCard";

import Project1 from "../../images/projects/design-for-accessibility.svg";
import Project2 from "../../images/projects/design-for-accessibility.svg";
import Project3 from "../../images/projects/design-for-accessibility.svg";

const projectWrapper = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  flexWrap: "nowrap",
  overflowX: "auto",
};

const gradients = {
  purple: "linear-gradient(180deg, #D37EE6 0%, #4926AD 100%)",
  orange: "linear-gradient(180deg, #FFD78A 0%, #F4762D 100%)",
  green: "linear-gradient(184.82deg, #6FF7E8 3.89%, #1F7EA1 96.11%)",
  blue: "linear-gradient(180deg, #3913B8 0%, #336CC1 100%)",
};

function Projects() {
  return (
    <div style={projectWrapper}>
      <ProjectCard
        image={Project1}
        projectTitle="Test"
        projectType="Article"
        readTime="15 min"
        backgroundGradient={gradients.purple}
      />
      <ProjectCard
        image={Project1}
        projectTitle="Test"
        projectType="Article"
        readTime="15 min"
        backgroundGradient={gradients.purple}
      />
      <ProjectCard
        image={Project1}
        projectTitle="Test"
        projectType="Article"
        readTime="15 min"
        backgroundGradient={gradients.purple}
      />
    </div>
  );
}

export default Projects;
