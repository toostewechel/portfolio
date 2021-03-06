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
import {
  ChapterIntroContext,
  ChapterContentContext,
} from "../../components/Article/Context";

import AvatarTom from "../../images/avatar-tom.png";

function ArticleLanding({
  id,
  backgroundColor,
  backgroundImage,
  illustration,
  ...props
}) {
  const ref = useScrollAnchor(id, ChapterIntroContext);

  const hash = `${id}-inhoud`;

  const [_, onHandleClick] = useScrollManager(hash, ChapterContentContext);

  return (
    <section
      style={{ backgroundColor, backgroundImage }}
      className="h-screen w-screen p-4 overflow-hidden relative font-body flex justify-center items-center"
      id={id}
      ref={ref}
    >
      <div
        style={{ maxWidth: "1128px", maxHeight: "800px" }}
        className="flex items-center w-full h-full relative p-2  md:grid md:grid-cols-12 md:grid-rows-6 md:p-4"
      >
        <div className="hidden md:row-start-2 md:row-end-7 md:col-start-5 md:col-end-13 md:flex md:items-end">
          <img
            alt={props.title}
            src={illustration}
            style={{ minWidth: "calc(100% * 1.5)" }}
          />
        </div>
        <div className="md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-7 md:flex md:flex-col justify-center">
          <div className="lg:pr-8 text-lg leading-relaxed text-gray-900 tracking-wide">
            <h1 className="font-display font-extrabold text-2xl lg:text-3xl mb-4 text-gray-900">
              {props.title}
            </h1>
            <p className="font-body text-base lg:text-lg mb-4">
              {props.content}
            </p>
          </div>
          <span className="mt-6">
            <div className="flex flex-row text-gray-900">
              <img alt="avatar" className="w-10 h-10 mr-2" src={AvatarTom} />
              <div className="flex-col self-center">
                <p className="text-body font-semibold text-sm not-italic">
                  Tom Oostewechel
                </p>
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
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 flex justify-center">
        <div
          className="flex flex-row flex-start w-full p-2 flex justify-center text-gray-900"
          style={{ maxWidth: "1128px" }}
        >
          <div className="h-8 w-8">
            <ReadMore href={`#${hash}`} onClick={onHandleClick} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleLanding;
