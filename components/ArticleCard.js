function ArticleCard(props) {
  return (
    <div className="flex flex-col md:flex-row mt-8 mb-8">
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
            Toegankelijke online dienstverlening ontwerpen in de zorg
          </h2>
          <p className="font-body text-normal mb-4 text-gray-800">
            Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor
            iedereen, ongeacht beperking. In dit artikel lees je wat digitale
            toegankelijkheid betekent voor een gebruiker, waarom het verstandig
            is om hier gericht voor te ontwerpen en waar je kunt beginnen met de
            implementatie.
          </p>
          <div>
            <button
              className="px-4 py-2 border border-gray-900 rounded-full text-xs uppercase font-medium hover:bg-gray-100"
              title={props.title}
              href={props.href}
            >
              {props.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
