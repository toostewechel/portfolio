//Import React module
import * as React from "react";

//Import MDXProvider and MDX components
import { MDXProvider } from "@mdx-js/react";
import * as components from "../../components/MDX";

//Import ReadMore component
import ReadMore from "../../components/ReadMore";

//Import Sroll
import {
  useScrollAnchor,
  useScrollManager,
} from "../../components/SrollAnchor";
import { ChapterIntroContext, ChapterContentContext } from "../../pages/_app";

function ArticleLanding({
  id,
  backgroundColor,
  backgroundImage,
  illustration,
  Content,
}) {
  const ref = useScrollAnchor(id, ChapterIntroContext);

  const hash = `${id}-inhoud`;

  const [_, onHandleClick] = useScrollManager(hash, ChapterContentContext);

  return (
    <section
      style={{ backgroundColor, backgroundImage }}
      className="h-screen w-screen p-8 overflow-hidden relative font-body flex justify-center items-center"
      id={id}
      ref={ref}
    >
      <div
        style={{ maxWidth: "1128px", maxHeight: "800px" }}
        className="grid grid-cols-12 grid-rows-6 w-full h-full relative p-4"
      >
        <div className="row-start-2 row-end-7 col-start-5 col-end-13 flex items-end">
          <img src={illustration} style={{ minWidth: "calc(100% * 1.5)" }} />
        </div>
        <div className="row-start-2 row-end-6 col-start-1 col-end-7 flex flex-col justify-center">
          <MDXProvider components={components}>
            <Content className="pr-16" />
          </MDXProvider>
          <span className="mt-6">
            <div className="flex flex-row text-gray-900">
              <img class="w-10 h-10 mr-2" src="images/avatar-tom.png" />
              <div class="flex-col self-center">
                <address>
                  <a
                    rel="author"
                    href="#"
                    class="text-body font-semibold text-sm not-italic"
                  >
                    Tom Oostewechel
                  </a>
                </address>
                <div className="items-center flex text-xs">
                  <time
                    itemProp="datePublished"
                    dateTime="2011-08-28"
                    title="August 28th, 2011"
                  >
                    14 maart 2020 · 15 min
                  </time>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-center">
        <div
          class="flex flex-row flex-start w-full p-2 flex justify-center text-gray-900"
          style={{ maxWidth: "1128px" }}
        >
          <ReadMore
            width={34}
            height={34}
            href={`#${hash}`}
            onClick={onHandleClick}
          />
        </div>
      </div>
    </section>
  );
}

export default ArticleLanding;
