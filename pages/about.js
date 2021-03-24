import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useLogPageVisit } from "../components/googleAnalytics";
import ProfileCard from "../components/Profile/ProfileCard";
import Projects from "../components/Projects/Projects";

export default function Index() {
  useLogPageVisit();

  return (
    <body style={{ backgroundColor: "#1F1F47" }} className="h-screen">
      <div>
        <Head>
          <meta name="description" content="Portfolio - Tom Oostewechel" />
          <title>Portfolio - Tom Oostewechel</title>
        </Head>
        <Layout>
          <Header />
          <main>
            <section className="mt-48 mb-48"></section>
          </main>
        </Layout>
      </div>
    </body>
  );
}
