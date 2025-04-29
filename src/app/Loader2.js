"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LoaderImage from "./assets/images/little_mumins_5.png";

function Loader2({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
  <div className="fixed inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-md">
    <div>
      <Image
        src={LoaderImage}
        alt="Loader Image"
        width={150}
        height={150}
        className="w-32 h-32 object-contain animate-zoomBounce"
      />
    </div>
  </div>
)}
      {children}
    </>
  );
}

export default Loader2;
