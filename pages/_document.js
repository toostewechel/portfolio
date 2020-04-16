import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html lang="nl">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;800;900&family=Raleway:ital,wght@0,400;0,500;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="subpixel-antialiased">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
