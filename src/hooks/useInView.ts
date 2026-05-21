import { useEffect, useState, useRef, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  /** When true, only triggers once and stays revealed. Default: false (bidirectional) */
  once?: boolean;
}

export function useInView(options?: UseInViewOptions): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { once = false, threshold = 0.15, ...rest } = options || {};

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsInView(false);
      }
    }, { threshold, ...rest });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once, threshold]);

  return [ref, isInView];
}
