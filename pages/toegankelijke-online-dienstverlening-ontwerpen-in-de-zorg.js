//Import React Module
import * as React from "react";

//Import Scroll
import slugify from "../utils/slugify";

import Head from "next/head";

//Import Blog Templates
import ArticleLanding from "../templates/blog/ArticleLanding";
import Chapter from "../components/Chapter";
import ArticleHeader from "../components/ArticleHeader";

//Import Blog Illustrations
import ILLUSTRATION_1 from "../illustrations/1.svg";
import ILLUSTRATION_2 from "../illustrations/2.svg";
import ILLUSTRATION_4 from "../illustrations/4.svg";
import ILLUSTRATION_5 from "../illustrations/5.svg";
import ILLUSTRATION_6 from "../illustrations/6.svg";

//Import Blog Content
import Chapter1 from "../content/Chapter1.mdx";
import Chapter2 from "../content/Chapter2.mdx";
import Chapter3 from "../content/Chapter3.mdx";
import Chapter4 from "../content/Chapter4.mdx";
import Conclusion from "../content/Conclusion.mdx";

const CHAPTERS = [
  "Toegankelijke online dienstverlening ontwerpen in de zorg",
  "Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief",
  "De meerwaarde van toegankelijkheid",
  "Toegankelijkheid overstijgt disciplines en domeinen",
  "Conclusie",
];

function Article() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Toegankelijke online dienstverlening ontwerpen in de zorg"
        />
        <title>Toegankelijke online dienstverlening ontwerpen in de zorg</title>
      </Head>
      <ArticleHeader chapters={CHAPTERS} />
      <main>
        <article>
          <ArticleLanding
            title="Toegankelijke online dienstverlening ontwerpen in de zorg"
            content="Ontwerpen voor toegankelijkheid maakt de gebruikservaring beter voor iedereen, ongeacht beperking. In dit artikel lees je wat digitale toegankelijkheid betekent voor een gebruiker, waarom het verstandig is om hier gericht voor te ontwerpen en waar je kunt beginnen met de implementatie."
            illustration={ILLUSTRATION_5}
            backgroundColor="#f9c5d1"
            backgroundImage="linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)"
            id={slugify(CHAPTERS[0])}
          ></ArticleLanding>
          <Chapter
            Content={
              <Chapter.Content
                id={slugify(`${CHAPTERS[0]} inhoud`)}
                Content={Chapter1}
              />
            }
          />
          <Chapter
            Opening={
              <Chapter.Opening
                title="Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief"
                content="In de afgelopen jaren is in onze samenleving veel dienstverlening gedigitaliseerd. Maar zodra iets online staat, betekent dit niet gelijk dat het beter toegankelijk is of gemakkelijker in gebruik."
                illustration={ILLUSTRATION_2}
                backgroundColor="#f6f0c4"
                backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
                label="Lees deel 1"
                id={slugify(CHAPTERS[1])}
              />
            }
            Content={
              <Chapter.Content
                id={slugify(`${CHAPTERS[1]} inhoud`)}
                Content={Chapter2}
              />
            }
          />
          <Chapter
            Opening={
              <Chapter.Opening
                title="De meerwaarde van toegankelijkheid"
                content="Het ontwikkelen van online diensten in de zorg brengt al genoeg uitdagingen met zich mee. Zouden we ons om nog een ‘extra’ ding druk moeten maken?"
                illustration={ILLUSTRATION_6}
                backgroundColor="#f6f0c4"
                backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
                label="Lees deel 2"
                id={slugify(CHAPTERS[2])}
              />
            }
            Content={
              <Chapter.Content
                id={slugify(`${CHAPTERS[2]} inhoud`)}
                Content={Chapter3}
              />
            }
          />
          <Chapter
            Opening={
              <Chapter.Opening
                title="Toegankelijkheid overstijgt disciplines en domeinen"
                content="De hoeveelheid informatie rondom de implementatie van toegankelijkheid is overweldigend. Dit maakt het een uitdaging om te bepalen wie waar verantwoordelijk voor is en om met toegankelijkheid te beginnen."
                illustration={ILLUSTRATION_4}
                backgroundColor="#f6f0c4"
                backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
                label="Lees deel 3"
                id={slugify(CHAPTERS[3])}
              />
            }
            Content={
              <Chapter.Content
                id={slugify(`${CHAPTERS[3]} inhoud`)}
                Content={Chapter4}
              />
            }
          />
          <Chapter
            Opening={
              <Chapter.Opening
                title="Conclusie"
                content="Digitale toegankelijkheid is niet een vakje dat je zomaar aan kunt vinken. Het is een complex organisatorisch vraagstuk waarbij verschillende disciplines samen moeten werken om een toegankelijke ervaring te creëren voor gebruikers."
                illustration={ILLUSTRATION_1}
                backgroundColor="#9ab5e1"
                backgroundImage="linear-gradient(315deg, #9ab5e1 0%, #f39fdc 74%)"
                label="Lees de conclusie"
                id={slugify(CHAPTERS[4])}
              />
            }
            Content={
              <Chapter.Content
                id={slugify(`${CHAPTERS[4]} inhoud`)}
                Content={Conclusion}
              />
            }
          />
          <section className="bg-pink-100 p-4 flex justify-center pb-16">
            <div
              className="text-gray-900 p-4"
              style={{ maxWidth: "980px", width: "100%" }}
            >
              <h5 className="text-normal text-gray-900 font-display font-semibold mb-2">
                Met dank aan
              </h5>
              <ul>
                <li className="font-body text-sm mb-1">
                  <span aria-hidden>👨‍🎨 </span>
                  <a
                    href="https://www.jeroenkrul.nl/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-body font-medium text-pink-700 hover:underline"
                  >
                    Jeroen Krul - Illustraties
                  </a>
                </li>
                <li className="font-body text-sm mb-1">
                  <span aria-hidden>👨‍💻 </span>
                  <a
                    href="https://github.com/jbovenschen"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-body font-medium text-pink-700 hover:underline"
                  >
                    Jaco Bovenschen - Website
                  </a>
                </li>
                <li className="font-body text-sm mb-1">
                  <span aria-hidden>🔍 </span>
                  <a
                    href="https://www.linkedin.com/in/kim-timmermans-8803b394/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-body font-medium text-pink-700 hover:underline"
                  >
                    Kim Timmermans - Eindredactie
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Article;
