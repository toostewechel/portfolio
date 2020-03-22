//Import React module
import * as React from "react";

//Import MDXProvider and MDX components
import { MDXProvider } from "@mdx-js/react";
import * as components from "../../components/MDX";

function ChapterOpening({
  backgroundColor,
  backgroundImage,
  Illustration,
  Content,
  label
}) {
  return (
    <section
      style={{ backgroundColor, backgroundImage }}
      className="h-screen w-screen p-8 overflow-hidden relative font-body flex justify-center items-center"
    >
      <div
        style={{ maxWidth: "1128px", maxHeight: "800px" }}
        className="grid grid-cols-12 grid-rows-6 w-full h-full relative p-4"
      >
        <div className="row-start-2 row-end-7 col-start-5 col-end-13 flex items-end">
          <Illustration style={{ "min-width": "calc(100% * 1.5)" }} />
        </div>
        <div className="row-start-2 row-end-6 col-start-1 col-end-7 flex flex-col justify-center">
          <MDXProvider components={components}>
            <Content className="pr-16" />
          </MDXProvider>
          <div>
            <a className="mt-4 px-4 py-2 rounded-full bg-pink-700 text-white">
              {label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterOpening;
