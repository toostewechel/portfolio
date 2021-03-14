import Skill from "./Skill";

import AvatarTom from "../../images/avatar-tom-real.png";
import GitHub from "../../images/icons/github.svg";
import LinkedIn from "../../images/icons/linkedin.svg";
import Vector from "../../images/icons/vector.svg";
import Courses from "../../images/icons/courses.svg";

const wrapper = {
  padding: "20px",
  backgroundColor: "rgba(15, 14, 71, 0.3)",
  border: "0.5px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0px 50px 100px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(40px)",
  borderRadius: "8px",
};

const card = {
  padding: "20px",
  backgroundImage: "linear-gradient(200.42deg, #8352FD 13.57%, #3913B8 98.35%)",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "240px",
  boxSizing: "border-box",
};

const cardContent = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
};

const socialMedia = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
};

const skills = {
  flexDirection: "column",
  gap: "20px",
  marginLeft: "20px",
  width: "240px",
};

const color = {
  blue: "#00CFFD",
  purple: "#8352FD",
};

const subject = {
  display: "flex",
  flexDirection: "flex-row",
  gap: "12px",
  alignItems: "center",
};

function ProfileCard() {
  return (
    <div style={wrapper} className="flex flex-row">
      <div style={card}>
        <div style={cardContent}>
          <img src={AvatarTom} alt="avatar-tom" />
          <div>
            <h4 className="font-display text-lg font-semibold text-white">
              Tom Oostewechel
            </h4>
            <p className="font-body font-light text-sm text-white opacity-75">
              Product Owner
            </p>
          </div>
          <p className="font-body text-sm text-white opacity-75">
            Currently focused on projects in the healthcare sector
          </p>
          <div style={socialMedia}>
            <a
              className="p-1 hover:bg-gray-900 hover:bg-opacity-25 rounded-full"
              href="#"
            >
              <img src={LinkedIn} alt="linkedin" />
            </a>
            <a
              className="p-1 hover:bg-gray-900 hover:bg-opacity-25 rounded-full"
              href="#"
            >
              <img src={GitHub} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div style={skills} className="hidden lg:flex">
        <div style={subject}>
          <img src={Vector} alt="core skills"></img>
          <h4 className="font-display font-bold text-white">Core Skills</h4>
        </div>
        <Skill title="Problem Solving" color={color.blue} width="90%" />
        <Skill title="Analytical" color={color.blue} width="85%" />
        <Skill title="Product Design" color={color.blue} width="75%" />
        <div style={subject} className="mt-2">
          <img src={Courses} alt="Learning"></img>
          <h4 className="font-display font-bold text-white">Learning</h4>
        </div>
        <Skill title="Product Management" color={color.purple} width="50%" />
        <Skill title="Coding" color={color.purple} width="35%" />
      </div>
    </div>
  );
}

export default ProfileCard;
