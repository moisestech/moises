"use client";

import React from "react";

interface SegmentBumperProps {
  text: string;
}

export default function SegmentBumper({ text }: SegmentBumperProps) {
  return (
    <div 
      aria-live="polite" 
      className="mono"
      style={{
        position: "fixed",
        left: 16,
        bottom: 86,
        zIndex: 40,
        background: "rgba(0,0,0,.6)",
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: "8px 10px",
        boxShadow: "0 10px 30px rgba(0,0,0,.35)",
        fontSize: "0.8rem",
        color: "var(--accent)",
        fontWeight: 600,
      }}
    >
      {text}
    </div>
  );
}
