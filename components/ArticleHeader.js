import React from "react";

import slugify from "../utils/slugify";

import BlogMenu from "./BlogMenu";

import Link from "next/link";

function Header({ chapters }) {
  const [isTop, setIsTop] = React.useState(true);

  React.useLayoutEffect(() => {
    console.log("effect");
    if (window.scrollY !== 0) {
      setIsTop(false);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsTop]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-10 w-full flex flex-row transition duration-300 ${
        !isTop ? "bg-pink-100 lg:bg-transparent" : "bg-transparent"
      }`}
    >
      <div class="mr-auto">
        <Link href="/">
          <a class="flex px-4 py-2 lg:p-8">{"<-"}</a>
        </Link>
      </div>

      <nav class="ml-auto px-4 py-2 lg:p-8">
        <BlogMenu>
          {chapters.map((chapter) => {
            const slug = slugify(chapter);

            return <BlogMenu.Item key={slug} slug={slug} title={chapter} />;
          })}
        </BlogMenu>
      </nav>
    </header>
  );
}

export default Header;
