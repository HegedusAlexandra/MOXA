import { useState, useEffect,useRef } from "react";

// Hook for handling scroll position
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

// Hook for handling screen width
export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};


export const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  }, [ref, options]); // Only recreate the observer if ref or options change

  return [ref, isIntersecting];
}