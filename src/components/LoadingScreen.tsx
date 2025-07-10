"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="hacking-loader text-green-400 text-2xl font-mono animate-pulse">[ ACCESSING TERMINAL... ]</div>
        <div className="w-48 h-2 bg-green-900 rounded overflow-hidden">
          <div className="h-full bg-green-400 animate-hack-progress" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}
