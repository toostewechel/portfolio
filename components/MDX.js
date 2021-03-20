import * as React from "react";

function Heading1(props) {
  return (
    <h1 className="font-display font-normal text-4xl mb-4 text-gray-900">
      {props.children}
    </h1>
  );
}

export const h1 = Heading1;

function Heading2(props) {
  return (
    <h2 className="font-display font-bold text-3xl mb-4 leading-tight tracking-normal text-gray-900 ">
      {props.children}
    </h2>
  );
}

export const h2 = Heading2;

const Heading3 = React.forwardRef(function Heading3(
  { children, ...props },
  ref
) {
  return (
    <h3
      {...props}
      ref={ref}
      className="font-display font-semibold text-2xl mb-2 pt-4 tracking-normal text-gray-900"
    >
      {children}
    </h3>
  );
});

export const h3 = Heading3;

function Paragraph(props) {
  return (
    <p className="font-body font-normal mb-4 leading-relaxed text-gray-800">
      {props.children}
    </p>
  );
}

export const p = Paragraph;

function Link(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body font-medium text-pink-700 hover:underline"
    >
      {props.children}
    </a>
  );
}

export const a = Link;

function List(props) {
  return (
    <ul className="font-body list-disc text-gray-800 mb-4 px-8">
      {props.children}
    </ul>
  );
}

export const ul = List;

function Blockquote(props) {
  return (
    <blockquote className="pl-4 border-l-4 border-pink-700 italic text-xl text-pink-900 mb-8 mt-8 first:mt-0">
      {props.children}
    </blockquote>
  );
}

export const blockquote = Blockquote;

function Wrapper(props) {
  return (
    <div className="text-lg leading-relaxed text-gray-900 tracking-wide">
      {props.children}
    </div>
  );
}

export const wrapper = Wrapper;

function Image(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="bg-pink-200 rounded mt-12 mb-2"
      style={{
        backgroundColor: "#eec0c6",
        backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #e58c8a 74%)",
      }}
    ></img>
  );
}

export const img = Image;

function Emphasis(props) {
  return <em className="font-body text-center">{props.children}</em>;
}

export const em = Emphasis;
