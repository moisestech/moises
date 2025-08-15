"use client";

import React from "react";

export default function NorthStar() {
  return (
    <div 
      aria-live="polite"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(6px)",
        background: "linear-gradient(180deg, rgba(11,12,16,.9), rgba(11,12,16,.75))",
        borderBottom: "1px solid var(--line)",
        padding: "8px 14px",
        textAlign: "center",
      }}
    >
      <span 
        className="mono" 
        style={{
          letterSpacing: "0.08em",
          color: "var(--accent)",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}
      >
        WHO STEERS THE FEED — TOOLS, ARTISTS, OR AUDIENCES?
      </span>
    </div>
  );
}
