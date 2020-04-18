import React from "react";
import { ScrollAnchorProvider } from "../SrollAnchor";

import {
  ChapterIntroContext,
  SubHeaderContext,
  ChapterContentContext,
} from "./Context";

import Header from "./Header";
import Content from "./Content";

function Article({ Content, Header, Acknowledgement }) {
  return (
    <ScrollAnchorProvider Ctx={ChapterIntroContext}>
      <ScrollAnchorProvider Ctx={ChapterContentContext}>
        <ScrollAnchorProvider Ctx={SubHeaderContext}>
          {Header}
          <main>
            {Content}
            {Acknowledgement}
          </main>
        </ScrollAnchorProvider>
      </ScrollAnchorProvider>
    </ScrollAnchorProvider>
  );
}

Article.Content = Content;
Article.Header = Header;

export default Article;
