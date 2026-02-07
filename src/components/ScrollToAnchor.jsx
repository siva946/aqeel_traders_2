import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      // Use setTimeout to ensure the DOM elements are rendered
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToAnchor;
