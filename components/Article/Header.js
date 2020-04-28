import React from "react";

import slugify from "../../utils/slugify";

import BlogMenu from "../BlogMenu";

import Link from "next/link";

function Header({ chapters }) {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
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
        !isTop ? "bg-pink-100 md:bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="z-10 flex items-center mr-auto px-4 py-2 lg:px-6">
        <Link href="/">
          <button className="flex items-center font-body text-pink-900">
            <svg
              aria-hidden
              className="h-4 w-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Terug</title>
              <path d="M3 8c0-.441.189-.861.52-1.153l7.435-6.54a1.231 1.231 0 011.626 1.848l-6.502 5.72a.167.167 0 000 .25l6.502 5.72a1.231 1.231 0 11-1.626 1.848L3.523 9.155A1.54 1.54 0 013 8z" />
            </svg>
            <a>Home</a>
          </button>
        </Link>
      </div>

      <nav className="ml-auto px-4 py-2 lg:p-8">
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
