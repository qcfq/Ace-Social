"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* floating lights */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/30 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/30 blur-[150px] rounded-full animate-pulse" />

      {/* mouse glow */}
      <div
        className="pointer-events-none absolute w-[300px] h-[300px] bg-white/10 blur-[120px] rounded-full"
        style={{
          left: position.x - 150,
          top: position.y - 150,
        }}
      />

    </div>
  );
}