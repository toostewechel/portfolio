const wrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const progressBar = {
  padding: "1px",
  backgroundColor: "#000",
  width: "100%",
  height: "4px",
  borderRadius: "4px",
};

function Skill(props) {
  return (
    <div style={wrapper}>
      <p className="font-body text-sm tracking-wide mb-1 text-white opacity-75">
        {props.title}
      </p>
      <div style={progressBar}>
        <div
          style={{
            height: "4px",
            borderRadius: "4px",
            width: props.width,
            backgroundColor: props.color,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
