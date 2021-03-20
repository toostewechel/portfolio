//Import React module
import * as React from "react";

//Import Scroll
import { useScrollAnchor, useScrollManager } from "../../../SrollAnchor";
import { ChapterIntroContext, ChapterContentContext } from "../../Context";

function Opening({
  id,
  backgroundColor,
  backgroundImage,
  illustration,
  label,
  ...props
}) {
  const ref = useScrollAnchor(id, ChapterIntroContext);

  const hash = `${id}-inhoud`;

  const [_, onHandleClick] = useScrollManager(hash, ChapterContentContext);

  return (
    <div
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
          <div className="lg:pr-8">
            <h1 className="font-display font-bold text-2xl leading-tight lg:text-3xl mb-4 text-gray-900">
              {props.title}
            </h1>
            <p className="font-body text-base leading-relaxed text-gray-900 lg:text-lg mb-4">
              {props.content}
            </p>
          </div>
          <div className="mt-8">
            <a
              href={`#${hash}`}
              onClick={onHandleClick}
              className="px-4 py-2 rounded bg-pink-700 text-white"
            >
              {label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opening;
