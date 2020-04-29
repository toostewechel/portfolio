function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="bg-pink-200 rounded mt-12 mb-2"
      style={{
        backgroundColor: "#eec0c6",
        backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%)",
      }}
    ></img>
  );
}

export default Image;
