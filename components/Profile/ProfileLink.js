import Link from "./Link";

import AvatarTom from "../../assets/avatars/avatar-tom-real.png";
import GitHub from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Kernwaarden from "../../assets/icons/discounts.svg";
import Skills from "../../assets/icons/profile.svg";
import Education from "../../assets/icons/tutorials.svg";
import WorkExperience from "../../assets/icons/cube.svg";
import Software from "../../assets/icons/downloads.svg";
import Contact from "../../assets/icons/notification.svg";

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

const links = {
  flexDirection: "column",
  gap: "16px",
  marginLeft: "20px",
  maxWidth: "240px",
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

function ProfileLink() {
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
            Op dit moment gefocust op projecten in de zorgsector
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
      <div style={links} className="flex">
        <Link href="#" id="#" icon={Kernwaarden} label="Kernwaarden" />
        <Link href="#" id="#" icon={Skills} label="Skills" />
        <Link href="#" id="#" icon={Education} label="Opleiding" />
        <Link href="#" id="#" icon={WorkExperience} label="Ervaring" />
        <Link href="#" id="#" icon={Software} label="Software" />
        <Link href="#" id="#" icon={Contact} label="Contact" />
      </div>
    </div>
  );
}

export default ProfileLink;
