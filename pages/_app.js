import React from "react";
import App from "next/app";
import "../css/app.css";

import {
  ScrollAnchorProvider,
  createScrollAnchorContext,
} from "../components/SrollAnchor";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

const ChapterIntroContext = createScrollAnchorContext("ChapterIntroContext");
const SubHeaderContext = createScrollAnchorContext("SubHeaderContext");
const ChapterContentContext = createScrollAnchorContext(
  "ChapterContentContext"
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ScrollAnchorProvider Ctx={ChapterIntroContext}>
        <ScrollAnchorProvider Ctx={ChapterContentContext}>
          <ScrollAnchorProvider Ctx={SubHeaderContext}>
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </ScrollAnchorProvider>
        </ScrollAnchorProvider>
      </ScrollAnchorProvider>
    );
  }
}

export {
  MyApp as default,
  ChapterIntroContext,
  SubHeaderContext,
  ChapterContentContext,
};
