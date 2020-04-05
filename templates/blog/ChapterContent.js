//Import React module
import * as React from "react";

//Import MDXProvider and MDX components
import { MDXProvider } from "@mdx-js/react";
import * as components from "../../components/MDX";

//Import Scroll
import slugify from "../../utils/slugify";
import {
  useScrollAnchor,
  useScrollManager,
} from "../../components/SrollAnchor";
import { SubHeaderContext, ChapterContentContext } from "../../pages/_app";

function ChapterMenu({ headings }) {
  const [activeSectionAnchor, setActiveSectionAnchor] = React.useState();

  const [activeAnchor, goToAnchor] = useScrollManager(SubHeaderContext);

  const items = React.useMemo(
    () =>
      headings.map((title) => ({
        title,
        slug: slugify(title),
      })),
    [headings]
  );

  React.useEffect(() => {
    if (items.find(({ slug }) => slug === activeAnchor)) {
      setActiveSectionAnchor(activeAnchor);
    }
  }, [activeAnchor, items, setActiveSectionAnchor]);

  return (
    <nav
      class="mr-auto ml-12 text-left text-sm sticky"
      style={{
        top: "1rem",
      }}
    >
      {items.map(({ slug, title }) => (
        <li
          class={`flex border-l-4 ${
            activeSectionAnchor === slug
              ? "border-pink-500 text-pink-900"
              : "border-pink-300 hover:border-pink-500 text-pink-700 hover:text-pink-900"
          }`}
        >
          <a
            href={`#${slug}`}
            class="pl-3 p-1 font-medium"
            onClick={goToAnchor(slug)}
          >
            {title}
          </a>
        </li>
      ))}
    </nav>
  );
}

const wrapper = function Wrapper(props) {
  let { children } = props;
  let h2;

  const headings = React.useMemo(
    () =>
      children
        .filter((child) => child.props.mdxType === "h3")
        .map((child) => child.props.children),
    [children]
  );

  if (props.children[0]?.props.mdxType === "h2") {
    [h2, ...children] = props.children;
  }

  return (
    <>
      <div style={{ maxWidth: "592px" }}>{h2}</div>
      <div class="flex flex-row items-start">
        <div style={{ maxWidth: "592px" }}>{children}</div>
        <ChapterMenu headings={headings} />
      </div>
    </>
  );
};

const h3 = function Heading3(props) {
  const hash = slugify(props.children);
  const ref = useScrollAnchor(hash, SubHeaderContext);

  return React.createElement(components.h3, { ...props, id: hash, ref });
};

function ChapterContent({ Content, id }) {
  const ref = useScrollAnchor(id, ChapterContentContext);

  return (
    <div className="bg-pink-100 p-4 flex justify-center pt-16 pb-16" ref={ref}>
      <div
        className="pt-8 flex flex-col items-start w-full text-gray-900 p-4"
        style={{ maxWidth: "980px", width: "100%" }}
      >
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

export default ChapterContent;
