import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";
import Layout from "../components/MyLayout";
import ArticleCard from "../components/ArticleCard";

import BlogText from "../content/BlogText.mdx";

export default function Index() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">My Blog</h1>
      <MDXProvider components={components}>
        <BlogText></BlogText>
      </MDXProvider>
      <h2 className="font-display text-3xl font-medium mt-8">Artikelen</h2>
      <ArticleCard
        datePublished="20 jan 2020"
        duration="15 min"
        backgroundImage="url(/images/featured-article-blog.png"
        title="Start met lezen"
      ></ArticleCard>
    </Layout>
  );
}
