import { useEffect, useRef, useState } from "react";

export function useIntersectionNearScreen({ distance = '100px', externalRef, isOnced = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const elementRef = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        isOnced && observer.disconnect();
      } else {
        !isOnced && setShow(false)
      }
    }

    const observerRef = new IntersectionObserver(onChange, {
      rootMargin: distance
    })

    elementRef && observerRef.observe(elementRef);

    return () => observerRef.disconnect();
  })

  return { isNearScreen, fromRef };
}
