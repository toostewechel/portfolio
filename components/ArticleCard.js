function ArticleCard(props) {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full mr-2 h-64 md:w-1/3 md:h-auto object-cover rounded-lg"
          src={props.src}
          alt={props.articleTitle}
        ></img>
        <div className="md:w-2/3 p-4">
          <div className="flex flex-col">
            <p className="text-gray-700 font-body font-semibold">
              {props.datePublished}
              <span> • {props.duration}</span>
            </p>
            <h3 className="font-display text-3xl font-extrabold mb-2 leading-snug">
              {props.articleTitle}
            </h3>
            <p className="font-body text-normal mb-4 text-gray-700">
              {props.articleContent}
            </p>
            <div>
              <a
                href={props.linkTo}
                className="px-4 py-2 border border-gray-500 rounded-full text-xs uppercase font-medium hover:bg-pink-700 hover:text-white hover:border-pink-700"
              >
                {props.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
