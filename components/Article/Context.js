import { createScrollAnchorContext } from "../SrollAnchor";

const ChapterIntroContext = createScrollAnchorContext("ChapterIntroContext");
const SubHeaderContext = createScrollAnchorContext("SubHeaderContext");
const ChapterContentContext = createScrollAnchorContext(
  "ChapterContentContext"
);

export { ChapterIntroContext, SubHeaderContext, ChapterContentContext };
