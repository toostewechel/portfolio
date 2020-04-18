import * as React from "react";

import {
  Menu as ReachMenu,
  MenuButton as ReachMenuButton,
  MenuItems as ReachMenuItems,
  MenuPopover as ReachMenuPopover,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button";
import VisuallyHidden from "@reach/visually-hidden";
import { useScrollManager } from "../components/SrollAnchor";

import { ChapterIntroContext } from "./Article/Context";

function Icon({ isOpen }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 50 50"
      width="40"
      height="40"
      className="stroke-current text-pink-900"
    >
      {isOpen ? (
        <>
          <line x1={8} x2={42} y1={8} y2={42} strokeWidth={2} />
          <line x1={8} x2={42} y1={42} y2={8} strokeWidth={2} />
        </>
      ) : (
        <>
          <line x1={0} x2={50} y1={10} y2={10} strokeWidth={2} />
          <line x1={15} x2={50} y1={25} y2={25} strokeWidth={2} />
          <line x1={30} x2={50} y1={40} y2={40} strokeWidth={2} />
        </>
      )}
    </svg>
  );
}

function MenuButton({ isOpen }) {
  return (
    <ReachMenuButton className="z-10 relative">
      <Icon isOpen={isOpen} />
      <VisuallyHidden>{isOpen ? "Sluit menu" : "Open menu"}</VisuallyHidden>
    </ReachMenuButton>
  );
}

function BlogMenu({ children }) {
  const items = React.Children.toArray(children).filter(
    (item) => item.type == BlogMenu.Item
  );

  return (
    <ReachMenu>
      {({ isOpen }) => (
        <>
          <MenuButton isOpen={isOpen} />
          <ReachMenuPopover
            portal={false}
            style={{
              right: "2rem",
            }}
          >
            <div
              className="rounded-full bg-transparent border-transparent p-0 mt-0 border-transparent absolute top-0 right-0 bottom-0 block bg-pink-100"
              style={{
                transform: "translate3d(36%, -58%, 0)",
                width: 1024,
                height: 1024,
              }}
            />

            <div className="w-full relative" style={{ width: 524 }}>
              <div className="relative right-0 mt-4">
                <ReachMenuItems>{items}</ReachMenuItems>
              </div>
            </div>
          </ReachMenuPopover>
        </>
      )}
    </ReachMenu>
  );
}

BlogMenu.Item = function ({ slug, title }) {
  const [isActive, onHandleClick] = useScrollManager(slug, ChapterIntroContext);

  return (
    <ReachMenuItem
      as="a"
      href={`#${slug}`}
      onSelect={onHandleClick}
      className="text-pink-900 text-right text-base p-2 pr-0 hover:underline"
    >
      {title}
    </ReachMenuItem>
  );
};

export default BlogMenu;
