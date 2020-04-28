// googleAnalytics.js
import React from "react";
import ReactGA from "react-ga";

const init = () => {
  if (process.browser) {
    ReactGA.initialize("UA-164861015-1");
  }
};

function useLogPageVisit() {
  React.useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
}

export { init, useLogPageVisit };
