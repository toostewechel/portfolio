import * as React from "react";

function Heading3(props) {
  return (
    <h3 className="text-3xl text-gray-900 font-bold font-display">
      {props.children}
    </h3>
  );
}

export const h3 = Heading3;

function Paragraph(props) {
  return <p className="text-lg text-gray-800 font-body">{props.children}</p>;
}

export const p = Paragraph;
