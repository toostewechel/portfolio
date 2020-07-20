//Import React module
import * as React from "react";

//Import MDXProvider and MDX components
import { MDXProvider } from "@mdx-js/react";
import * as components from "../../../MDX";

//Import Scroll
import slugify from "../../../../utils/slugify";
import { useScrollAnchor, useScrollManager } from "../../../SrollAnchor";
import { SubHeaderContext, ChapterContentContext } from "../../Context";

function Menu({ children }) {
  return (
    <nav className="mr-auto ml-12 text-left text-sm">
      <ol className="flex flex-col">{children}</ol>
    </nav>
  );
}

function MenuItem({ label, hash }) {
  const [isActive, onHandleClick] = useScrollManager(hash, SubHeaderContext);

  return (
    <li
      className={`flex border-l-4 ${
        isActive
          ? "border-pink-500 text-pink-900"
          : "border-pink-300 hover:border-pink-500 text-pink-700 hover:text-pink-900"
      }`}
    >
      <a
        href={`#${hash}`}
        className="pl-3 p-1 font-medium"
        onClick={onHandleClick}
      >
        {label}
      </a>
    </li>
  );
}

function SideMenu({ anchors }) {
  return (
    <div
      className="hidden lg:flex sticky"
      style={{
        top: "1rem",
      }}
    >
      <Menu>
        {anchors.map((anchor) => {
          const slug = slugify(anchor);

          return <MenuItem key={slug} label={anchor} hash={slug} />;
        })}
      </Menu>
    </div>
  );
}

const wrapper = function Wrapper(props) {
  let { children } = props;
  let h2;

  if (props.children[0]?.props.mdxType === "h2") {
    [h2, ...children] = props.children;
  }

  const anchors = children
    .filter((child) => child.props.mdxType === "h3")
    .map((child) => child.props.children);

  return (
    <>
      <div className="max-w-xl w-full">{h2}</div>
      <div className="flex flex-row-reverse items-start">
        <SideMenu anchors={anchors} />
        <div className="max-w-xl w-full">{children}</div>
      </div>
    </>
  );
};

const h3 = function Heading3(props) {
  const hash = slugify(props.children);
  const ref = useScrollAnchor(hash, SubHeaderContext);

  return React.createElement(components.h3, { ...props, id: hash, ref });
};

function ArticleContent({ Content, id }) {
  const ref = useScrollAnchor(id, ChapterContentContext);

  return (
    <div className="bg-pink-100 p-4 flex justify-center pt-16 pb-16" ref={ref}>
      <div className="pt-4 lg:pt-8 flex flex-col items-center lg:items-start w-full text-gray-900 p-2 lg:max-w-screen-md xl:max-w-screen-lg">
        <MDXProvider
          components={{
            ...components,
            wrapper,
            h3,
          }}
        >
          <Content />
        </MDXProvider>
      </div>
    </div>
  );
}

ArticleContent.displayName = "Content";

export default ArticleContent;
