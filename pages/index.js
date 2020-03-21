import Layout from "../components/MyLayout";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

import BlogText from "../content/BlogText.mdx";

export default function Index() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">My Blog</h1>
      <MDXProvider components={components}>
        <BlogText></BlogText>
      </MDXProvider>
    </Layout>
  );
}
