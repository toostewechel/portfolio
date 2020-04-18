import React from "react";

import Chapter from "./Chapter";
import Acknowledgement from "./Acknowledgment";

function Content({ Landing, Chapters, Acknowledgement }) {
  return (
    <article>
      {Landing}
      {Chapters}
      {Acknowledgement}
    </article>
  );
}

Content.Chapter = Chapter;
Content.Acknowledgement = Acknowledgement;

export default Content;
