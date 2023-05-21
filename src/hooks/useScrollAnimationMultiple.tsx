import { RefObject } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const useScrollAnimationMultiple = (
  numElements: number
): [RefObject<HTMLDivElement>[], boolean] => {
  const elementRefs = Array.from({ length: numElements }, () =>
    useRef<HTMLDivElement>(null)
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elementRefs.forEach((elementRef) => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    });

    return () => {
      elementRefs.forEach((elementRef) => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      });
    };
  }, []);

  return [elementRefs, isVisible];
};

export default useScrollAnimationMultiple;
