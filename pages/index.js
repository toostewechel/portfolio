import Layout from "../components/MyLayout";
import ArticleCard from "../components/ArticleCard";

export default function Index() {
  return (
    <Layout>
      <div className="mt-16 mb-16">
        <h1 className="font-display font-black text-5xl text-gray-900 mb-8 md:mb-4 leading-tight">
          Ik maak{" "}
          <span className="hover:text-pink-700 leading-tight">digitale</span>{" "}
          producten<span className="text-pink-700">.</span>
        </h1>
        <p className="font-body text-gray-700">
          Ik ben Tom Oostewechel, productontwerper bij Jouw Omgeving in Utrecht.
          Ik maak complexe vraagstukken uit de zorg op een creatieve en visuele
          wijze inzichtelijk en combineer kennis uit verschillende domeinen en
          vertaal deze naar duurzame en gebruiksvriendelijke oplossingen. Ik
          schrijf hier over projecten, het ontwerpproces en gerelateerde
          onderwerpen.
        </p>
      </div>
      <h2 className="font-display text-3xl font-medium mt-8 mb-8">Projecten</h2>
      <ArticleCard
        datePublished="20 jan 2020"
        duration="13 min"
        backgroundImage="url(/images/featured-article-online-behandelprogrammas.png)"
        articleTitle="Gestandaardiseerde e-health modules ontwikkelen"
        content="Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor
        iedereen, ongeacht beperking. In dit artikel lees je wat digitale
        toegankelijkheid betekent voor een gebruiker, waarom het verstandig"
        title="Start met lezen"
        linkTo="/about"
      ></ArticleCard>
      <h2 className="font-display text-3xl font-medium mt-8 mb-8">Artikelen</h2>
      <ArticleCard
        datePublished="20 jan 2020"
        duration="15 min"
        backgroundImage="url(/images/featured-article-blog.png)"
        articleTitle="Toegankelijke online dienstverlening ontwerpen in de zorg"
        content="Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor
        iedereen, ongeacht beperking. In dit artikel lees je wat digitale
        toegankelijkheid betekent voor een gebruiker, waarom het verstandig"
        title="Lees artikel"
        linkTo="/article1"
      ></ArticleCard>
    </Layout>
  );
}
