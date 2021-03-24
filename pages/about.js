import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useLogPageVisit } from "../components/googleAnalytics";
import ProfileLink from "../components/Profile/ProfileLink";

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
            <section className="mt-40 mb-40 md:p-4">
              <div className="flex flex-row justify-between">
                <div className="w-full md:w-1/2">
                  <ProfileLink />
                </div>
                <div className="hidden md:flex md:w-1/2"></div>
              </div>
            </section>
          </main>
        </Layout>
      </div>
    </body>
  );
}
