function ArticleCard(props) {
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="w-full mr-2 h-64 md:w-1/3 md:h-auto"
        style={{
          backgroundImage: props.backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px"
        }}
      ></div>
      <div className="md:w-2/3 p-4">
        <div className="flex flex-col">
          <p className="text-gray-600 font-body font-semibold">
            {props.datePublished}
            <span> • {props.duration}</span>
          </p>
          <h2 className="font-display text-3xl font-extrabold mb-2 leading-snug">
            {props.articleTitle}
          </h2>
          <p className="font-body text-normal mb-4 text-gray-700">
            {props.content}
          </p>
          <div>
            <a
              href={props.linkTo}
              className="px-4 py-2 border border-gray-500 rounded-full text-xs uppercase font-medium hover:bg-pink-700 hover:text-white"
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
