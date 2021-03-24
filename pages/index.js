import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useLogPageVisit } from "../components/googleAnalytics";
import ProfileCard from "../components/Profile/ProfileCard";
import Projects from "../components/Projects/Projects";

export default function Index() {
  useLogPageVisit();

  return (
    <body style={{ backgroundColor: "#1F1F47" }}>
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
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                  <h4 className="font-display font-light text-sm uppercase tracking-widest text-white opacity-75">
                    Snapshots
                  </h4>
                  <h1 className="font-display font-bold text-5xl leading-tight tracking-normal text-white">
                    Ik ontwerp en bouw digitale{" "}
                    <span className="gradient-text">producten.</span>
                  </h1>
                  <p
                    style={{ maxWidth: "460px" }}
                    className="font-body text-lg font-normal leading-relaxed text-gray-400  mb-6"
                  >
                    Ik maak complexe vraagstukken op een creatieve en visuele
                    wijze inzichtelijk en combineer kennis uit verschillende
                    domeinen en vertaal deze naar duurzame en
                    gebruiksvriendelijke digitale oplossingen.
                  </p>
                  <div>
                    <a
                      href="/about"
                      style={{
                        border: "1px solid #00CFFD",
                      }}
                      className="font-display font-semibold pl-6 pt-3 pb-3 pr-6 rounded text-display text-white text-sm"
                    >
                      Over mij
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex md:self-center md:justify-end md:w-1/2">
                  <ProfileCard />
                </div>
              </div>
            </section>
            <section className="mb-48">
              <div className="md:p-4">
                <h2 className="font-display font-bold text-3xl leading-tight tracking-normal text-white mb-4">
                  Snapshots
                </h2>
                <p
                  style={{ maxWidth: "320px" }}
                  className="font-body text-lg font-normal leading-relaxed text-gray-400  
                mb-12"
                >
                  Een verzameling van mijn professionele en persoonlijke
                  projecten.
                </p>
              </div>
              <div>
                <Projects />
              </div>
            </section>
          </main>
        </Layout>
      </div>
    </body>
  );
}
