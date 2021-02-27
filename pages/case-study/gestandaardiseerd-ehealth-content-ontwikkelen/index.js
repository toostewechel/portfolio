//Import React Module
import * as React from "react";

//Import Scroll
import slugify from "../../../utils/slugify";

import Head from "next/head";

//Import Blog Templates
import ArticleLanding from "../../../templates/blog/ArticleLanding";
import Article from "../../../components/Article";

//Import Blog Illustrations
import ILLUSTRATION_1 from "../../../illustrations/gestandaardiseerd-ehealth-content-ontwikkelen/1.svg";

//Import Blog Content
import Chapter1 from "../../../content/gestandaardiseerd-ehealth-content-ontwikkelen/Chapter1.mdx";

//Import GA-wrapper
import { useLogPageVisit } from "../../../components/googleAnalytics";

//Import Featured Image
import FeatureArticleProgramBuilder from "../../../images/featured-article-program-builder.png";

const CHAPTERS = [
  "Toegankelijke online dienstverlening ontwerpen in de zorg",
  "Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief",
  "De meerwaarde van toegankelijkheid",
  "Toegankelijkheid overstijgt disciplines en domeinen",
  "Conclusie",
];

const { Content } = Article;
const { Chapter } = Content;

function Page() {
  useLogPageVisit();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Toegankelijke online dienstverlening ontwerpen in de zorg"
        />
        <meta
          property="og:title"
          content="Toegankelijke online dienstverlening ontwerpen in de zorg"
        />
        <meta property="og:image" content={FeatureArticleProgramBuilder} />
        <meta
          property="og:description"
          content="In dit artikel lees je wat digitale toegankelijkheid betekent voor een gebruiker, waarom het verstandig is om hier gericht voor te ontwerpen en waar je kunt beginnen met de implementatie."
        />
        <meta
          property="og:url"
          content="https://snapshots.design/toegankelijke-online-dienstverlening-ontwerpen-in-de-zorg/"
        />
        <title>Toegankelijke online dienstverlening ontwerpen in de zorg</title>
      </Head>
      <Article
        Header={<Article.Header chapters={CHAPTERS} />}
        Content={
          <Article.Content
            Landing={
              <ArticleLanding
                title="Gestandaardiseerd e-health content ontwikkelen"
                content="Hoe kunnen we de ontwikkeling van e-health content standaardiseren? Deze vraag stelden wij onszelf een jaar geleden toen we twee grote nieuwe ontwikkelopdrachten voor behandelprogramma's binnenkregen. Een jaar later, en twee nieuwe behandelprogramma's verder, geven we in dit artikel antwoord op deze vraag."
                illustration={ILLUSTRATION_1}
                backgroundColor="#fce043"
                backgroundImage="linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)"
                id={slugify(CHAPTERS[0])}
              />
            }
            Acknowledgement={<Content.Acknowledgement />}
            Chapters={
              <>
                <Content.Chapter
                  Content={
                    <Chapter.Content
                      id={slugify(`${CHAPTERS[0]} inhoud`)}
                      Content={Chapter1}
                    />
                  }
                />
              </>
            }
          />
        }
      />
    </>
  );
}

export default Page;
