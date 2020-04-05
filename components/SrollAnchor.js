import * as React from "react";

const createScrollAnchorContext = (name, initialValue = {}) => {
  const Ctx = React.createContext(initialValue);
  Ctx.displayName = name;
  return Ctx;
};

function ScrollAnchorProvider({ children, Ctx }) {
  const [anchors, setAnchors] = React.useState({});

  const [active, setActive] = React.useState(undefined);

  const observer = React.useRef();

  const onHandleObserver = React.useCallback(
    (entries) => {
      const targets = entries
        .filter((entry) => entry.intersectionRatio === 0)
        .map((entry) => entry.target)
        .sort((a, b) => {
          if (a.target === b) {
            return 0;
          }

          let position = a.compareDocumentPosition(b);

          if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            return 1;
          } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
            return -1;
          } else {
            return 0;
          }
        });

      const hash = Object.keys(anchors).find(
        (key) => anchors[key] === targets[0]
      );

      if (hash) {
        setActive(hash);
      }
    },
    [anchors, setActive]
  );

  React.useEffect(() => {
    observer.current = new IntersectionObserver(onHandleObserver, {
      rootMargin: "0px 0px -100%",
    });

    return () => {
      observer.current.disconnect();
    };
  }, [onHandleObserver]);

  React.useEffect(() => {
    for (let el of Object.values(anchors)) {
      observer.current.observe(el);
    }
  }, [anchors, observer]);

  const registerAnchors = React.useCallback(
    (hash, anchor) => {
      setAnchors((anchors) => {
        let newAnchors = anchors;

        // We only should update the state whenever the
        // item is not yet currently set.
        if (newAnchors[hash] !== anchor) {
          newAnchors = {
            ...anchors,
            [hash]: anchor,
          };
        }

        return newAnchors;
      });
    },
    [setAnchors]
  );

  const unregisterAnchors = React.useCallback(
    (hash) => {
      setAnchors((anchors) => {
        let newAnchors = anchors;

        if (newAnchors[hash] != null) {
          let { [hash]: _, newAnchors } = newAnchors;
        }

        return newAnchors;
      });
    },
    [setAnchors]
  );

  const value = React.useMemo(() => {
    return {
      anchors,
      activeAnchor: active,
      registerAnchors,
      unregisterAnchors,
    };
  }, [anchors, active, registerAnchors, unregisterAnchors]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

const useScrollManager = (Ctx) => {
  const { activeAnchor, anchors } = React.useContext(Ctx);

  const goTo = (hash) => (event) => {
    if (anchors[hash].offsetTop != null) {
      event.preventDefault();

      window.scroll({
        behavior: "smooth",
        top: anchors[hash].offsetTop,
        block: "start",
      });
    }
  };

  return [activeAnchor, goTo];
};

const useScrollAnchor = (hash, Ctx) => {
  const anchor = React.useRef();

  const { registerAnchors, unregisterAnchors } = React.useContext(Ctx);

  React.useEffect(() => {
    registerAnchors(hash, anchor.current);

    return () => {
      unregisterAnchors(hash);
    };
  }, [hash, anchor, registerAnchors, unregisterAnchors]);

  return anchor;
};

export {
  ScrollAnchorProvider,
  useScrollManager,
  useScrollAnchor,
  createScrollAnchorContext,
};
