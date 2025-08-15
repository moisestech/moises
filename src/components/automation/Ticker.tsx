"use client";

import React from "react";

export default function Ticker() {
  const text = "AUTOMATE TASKS, NOT CARE • SHARE AUTHORSHIP • HUMAN-IN-THE-LOOP • MIAMI IS A TESTBED • CREDITS, NOT JUST CONTENT • ";
  
  return (
    <div 
      aria-hidden 
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        background: "linear-gradient(180deg, var(--surface), #0c0e13)",
        zIndex: 20,
      }}
    >
      <div 
        className="mono" 
        style={{
          whiteSpace: "nowrap",
          animation: "marquee 24s linear infinite",
          padding: "8px 0",
          color: "#bfc5d1",
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
      >
        {text.repeat(12)}
      </div>
    </div>
  );
}
