//Import React Module
import * as React from "react";

//Import Scroll
import { useScrollAnchor } from "../components/SrollAnchor";
import slugify from "../utils/slugify";

//Import BlogMenu
import BlogMenu from "../components/BlogMenu";

//Import Blog Templates
import ArticleLanding from "../templates/blog/ArticleLanding";
import ChapterOpening from "../templates/blog/ChapterOpening";
import ChapterContent from "../templates/blog/ChapterContent";

//Import Blog Illustrations
import Illustration1 from "../illustrations/1";
import Illustration2 from "../illustrations/2";
import Illustration3 from "../illustrations/3";
import Illustration4 from "../illustrations/4";
import Illustration5 from "../illustrations/5";
import Illustration6 from "../illustrations/6";

//Import Blog Content
import IntroText from "../content/IntroText.mdx";
import Chapter1 from "../content/Chapter1.mdx";
import Part1 from "../content/Part1.mdx";
import Chapter2 from "../content/Chapter2.mdx";
import Part2 from "../content/Part2.mdx";
import Chapter3 from "../content/Chapter3.mdx";
import Part3 from "../content/Part3.mdx";
import Chapter4 from "../content/Chapter4.mdx";
import Part4 from "../content/Part4.mdx";
import Conclusion from "../content/Conclusion.mdx";

const CHAPTERS = [
  "Toegankelijke online dienstverlening ontwerpen in de zorg",
  "Toegankelijkheid is keuzevrijheid hebben, contextafhankelijk en inclusief",
  "De meerwaarde van toegankelijkheid",
  "Toegankelijkheid overstijgt disciplines en domeinen",
  "Conclusie"
];

function Article1() {
  return (
    <div>
      <BlogMenu>
        {CHAPTERS.map(chapter => {
          const slug = slugify(chapter);

          return <BlogMenu.Item key={slug} slug={slug} title={chapter} />;
        })}
      </BlogMenu>
      <ArticleLanding
        Content={IntroText}
        Illustration={Illustration5}
        backgroundColor="#f9c5d1"
        backgroundImage="linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)"
      ></ArticleLanding>
      <ChapterContent
        id={slugify(`${CHAPTERS[0]} inhoud`)}
        Content={Chapter1}
      />
      <ChapterOpening
        Content={Part1}
        Illustration={Illustration2}
        backgroundColor="#f6f0c4"
        backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
        label="Lees deel 1"
      />
      <ChapterContent
        id={slugify(`${CHAPTERS[1]} inhoud`)}
        Content={Chapter2}
      />
      <ChapterOpening
        Content={Part2}
        Illustration={Illustration6}
        backgroundColor="#f6f0c4"
        backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
        label="Lees deel 2"
        id={slugify(CHAPTERS[2])}
      />
      <ChapterContent
        id={slugify(`${CHAPTERS[2]} inhoud`)}
        Content={Chapter3}
      />
      <ChapterOpening
        Content={Part3}
        Illustration={Illustration4}
        backgroundColor="#f6f0c4"
        backgroundImage="linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)"
        label="Lees deel 3"
        id={slugify(CHAPTERS[3])}
      />
      <ChapterContent
        id={slugify(`${CHAPTERS[3]} inhoud`)}
        Content={Chapter4}
      />
      <ChapterOpening
        Content={Part4}
        Illustration={Illustration4}
        backgroundColor="#9ab5e1"
        backgroundImage="linear-gradient(315deg, #9ab5e1 0%, #f39fdc 74%)"
        label="Lees de conclusie"
        id={slugify(CHAPTERS[4])}
      />
      <ChapterContent
        id={slugify(`${CHAPTERS[4]} inhoud`)}
        Content={Conclusion}
      />
    </div>
  );
}

export default Article1;
