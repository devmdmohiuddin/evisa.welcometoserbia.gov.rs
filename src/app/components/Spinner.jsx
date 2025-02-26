"use client"; // Ensure it runs on the client side

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <img 
          src="./images/loader.png" 
          alt="Loader" 
          className="animate-spin-slow"
        />
      </div>
    );
  };

export default function RouteLoader({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Detects route changes

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // Shows spinner for 0.5s

    return () => clearTimeout(timer);
  }, [pathname]); // Runs on route change

  return (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );
}
