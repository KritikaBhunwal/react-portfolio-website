// ScrollRestoration.jsx
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  // A ref to store scroll positions keyed by location.key
  const positions = useRef({});

  // Save the scroll position before the route changes
  useEffect(() => {
    return () => {
      positions.current[location.key] = window.scrollY;
    };
  }, [location]);

  // When location changes, if it was a "POP" (back/forward) restore saved position; otherwise scroll to top
  useEffect(() => {
    if (navigationType === "POP" && positions.current[location.key] !== undefined) {
      window.scrollTo(0, positions.current[location.key]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
};

export default ScrollRestoration;
