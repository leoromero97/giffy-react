import { useEffect, useRef, useState } from "react";

export function useIntersectionNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    }

    const observerRef = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    observerRef.observe(fromRef.current);

    return () => observerRef.disconnect();
  })

  return { isNearScreen, fromRef };
}
