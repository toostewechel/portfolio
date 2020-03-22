import * as React from "react";

import {
  Menu as ReachMenu,
  MenuButton as ReachMenuButton,
  MenuItems as ReachMenuItems,
  MenuPopover as ReachMenuPopover,
  MenuItem as ReachMenuItem
} from "@reach/menu-button";
import VisuallyHidden from "@reach/visually-hidden";
import { useScrollManager } from "../components/SrollAnchor";

import { ChapterIntroContext } from "../pages/_app";

function Icon() {
  return (
    <svg
      viewBox="0 0 50 50"
      width="40"
      height="40"
      className="stroke-current text-pink-900"
    >
      <line x1={0} x2={50} y1={10} y2={10} strokeWidth={2} />
      <line x1={15} x2={50} y1={25} y2={25} strokeWidth={2} />
      <line x1={30} x2={50} y1={40} y2={40} strokeWidth={2} />
    </svg>
  );
}

function MenuButton() {
  return (
    <ReachMenuButton>
      <Icon />
      <VisuallyHidden>Inhoud</VisuallyHidden>
    </ReachMenuButton>
  );
}

function BlogMenu({ children }) {
  const items = React.Children.toArray(children).filter(
    item => item.type == BlogMenu.Item
  );

  return (
    <nav className="fixed top-0 right-0 p-8" style={{ zIndex: 1 }}>
      <ReachMenu>
        {({ isOpen }) => (
          <>
            <MenuButton isOpen={isOpen} />
            <ReachMenuPopover className="border-transparent absolute block">
              <ReachMenuItems className="bg-transparent border-transparent p-0 mt-2">
                {items}
              </ReachMenuItems>
            </ReachMenuPopover>
          </>
        )}
      </ReachMenu>
    </nav>
  );
}

BlogMenu.Item = function({ slug, title }) {
  const [isActive, onHandleClick] = useScrollManager(slug, ChapterIntroContext);

  return (
    <ReachMenuItem
      as="a"
      href={`#${slug}`}
      onClick={onHandleClick}
      className="text-pink-900 text-right text-base p-2 pr-0 focus:bg-transparent hover:bg-transparent data-selected:bg-transparent hover:font-weight-bold"
    >
      {title}
    </ReachMenuItem>
  );
};

export default BlogMenu;
