import React from "react";
import App from "next/app";
import "../css/app.css";

import { init } from "../components/googleAnalytics";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

init();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default MyApp;
