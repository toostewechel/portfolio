import React from "react";
import App from "next/app";
import "../css/app.css";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

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
