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
      className="h-screen w-screen p-8 overflow-hidden relative font-body flex justify-center items-center"
      id={id}
      ref={ref}
    >
      <div
        style={{ maxWidth: "1128px", maxHeight: "800px" }}
        className="grid grid-cols-12 grid-rows-6 w-full h-full relative p-4"
      >
        <div className="row-start-2 row-end-7 col-start-5 col-end-13 flex items-end">
          <img
            alt={props.title}
            src={illustration}
            style={{ minWidth: "calc(100% * 1.5)" }}
          />
        </div>
        <div className="row-start-2 row-end-6 col-start-1 col-end-7 flex flex-col justify-center">
          <div className="pr-8 text-lg leading-relaxed text-gray-900 tracking-wide">
            <h1 className="font-display font-extrabold text-3xl mb-4 text-gray-900">
              {props.title}
            </h1>
            <p className="font-body font-normal mb-4">{props.content}</p>
          </div>
          <div className="mt-8">
            <a
              href={`#${hash}`}
              onClick={onHandleClick}
              className="px-4 py-2 rounded-full bg-pink-700 text-white"
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
