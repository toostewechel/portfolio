import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useLogPageVisit } from "../components/googleAnalytics";
import ProfileCard from "../components/Profile/ProfileCard";
import Projects from "../components/Projects/Projects";

export default function Index() {
  useLogPageVisit();

  return (
    <body style={{ backgroundColor: "#1F1F47", height: "100vh" }}>
      <div>
        <Head>
          <meta name="description" content="Portfolio - Tom Oostewechel" />
          <title>Portfolio - Tom Oostewechel</title>
        </Head>
        <Layout>
          <Header />
          <main>
            <section className="mt-48 mb-48">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                  <h4 className="font-display font-light text-sm uppercase tracking-widest text-white opacity-75">
                    Snapshots
                  </h4>
                  <h1 className="font-display font-bold text-5xl leading-tight tracking-normal text-white">
                    I Design and Build Digital{" "}
                    <span style={{ color: "#00CFFD" }}>Products.</span>
                  </h1>
                  <p
                    style={{ maxWidth: "460px" }}
                    className="font-body font-normal text-base leading-relaxed text-white opacity-75 mb-6"
                  >
                    In my work I untangle complexity in a structured, creative
                    and visual way and translate problems into sustainable and
                    user friendly solutions through combining knowledge and
                    skills from different domains.
                  </p>
                  <div>
                    <a
                      href="#"
                      style={{
                        background: "#00CFFD",
                      }}
                      className="font-display font-semibold pl-6 pt-3 pb-3 pr-6 rounded text-display text-white text-sm"
                    >
                      About me
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex md:self-center md:justify-end md:w-1/2">
                  <ProfileCard />
                </div>
              </div>
            </section>
            <section className="mb-48">
              <h2 className="font-display font-bold text-3xl leading-tight tracking-normal text-white mb-6">
                Snapshots
              </h2>
              <p
                style={{ maxWidth: "320px" }}
                className="font-body font-normal text-base leading-relaxed text-white opacity-75 mb-6"
              >
                A snapshot of my professional and personal work projects.
              </p>
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
