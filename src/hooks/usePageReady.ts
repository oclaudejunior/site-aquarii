import { useEffect, useState } from "react";

/**
 * Returns true once the PageLoader has finished (or immediately if it already did).
 * Components mounted after navigation get `true` synchronously.
 */
export function usePageReady(): boolean {
  const [ready, setReady] = useState<boolean>(
    typeof window !== "undefined" && !!window.__pcPageReady
  );

  useEffect(() => {
    if (ready) return;
    if (typeof window !== "undefined" && window.__pcPageReady) {
      setReady(true);
      return;
    }
    const handler = () => setReady(true);
    window.addEventListener("pc:page-ready", handler, { once: true });
    return () => window.removeEventListener("pc:page-ready", handler);
  }, [ready]);

  return ready;
}
