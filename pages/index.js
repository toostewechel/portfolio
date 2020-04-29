import Header from "../components/Header";
import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Head from "next/head";
import { useLogPageVisit } from "../components/googleAnalytics";

import FeatureArticleToegankelijkeDienstverlening from "../images/featured-article-toegankelijke-dienstverlening.png";

export default function Index() {
  useLogPageVisit();

  return (
    <div>
      <Head>
        <meta name="description" content="Portfolio - Tom Oostewechel" />
        <title>Portfolio - Tom Oostewechel</title>
      </Head>
      <Layout>
        <Header />
        <main>
          <div className="mt-16 mb-16">
            <h1 className="font-display font-black text-5xl text-gray-900 mb-8 md:mb-4 leading-tight">
              Ik ontwerp{" "}
              <span className="hover:text-pink-700 leading-tight">
                digitale
              </span>{" "}
              producten<span className="text-pink-700">.</span>
            </h1>
            <p className="font-body text-gray-700">
              Ik ben Tom Oostewechel, productontwerper bij Jouw Omgeving in
              Utrecht. Ik maak complexe vraagstukken op een creatieve en visuele
              wijze inzichtelijk en combineer kennis uit verschillende domeinen
              en vertaal deze naar duurzame en gebruiksvriendelijke oplossingen.
              Op deze site schrijf ik over projecten, het ontwerpproces en
              gerelateerde onderwerpen.
            </p>
          </div>
          <h2 className="font-display text-3xl font-medium mt-8 mb-8">
            Artikelen
          </h2>
          <ArticleCard
            datePublished="20 jan 2020"
            duration="15 min"
            src={FeatureArticleToegankelijkeDienstverlening}
            articleTitle="Toegankelijke online dienstverlening ontwerpen in de zorg"
            articleContent="In dit artikel lees je wat digitale toegankelijkheid betekent voor een gebruiker, waarom het verstandig is om hier gericht voor te ontwerpen en waar je kunt beginnen met de implementatie."
            title="Lees artikel"
            linkTo="/toegankelijke-online-dienstverlening-ontwerpen-in-de-zorg"
          ></ArticleCard>
        </main>
        <footer className="mt-16 md:mt-32">
          <Footer />
        </footer>
      </Layout>
    </div>
  );
}
