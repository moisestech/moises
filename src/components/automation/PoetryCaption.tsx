"use client";

import React from "react";

interface PoetryCaptionProps {
  text: string;
}

export default function PoetryCaption({ text }: PoetryCaptionProps) {
  return (
    <div 
      className="mono" 
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "12px 16px",
        background: "linear-gradient(180deg, transparent, rgba(0,0,0,.75))",
        textAlign: "center",
        fontSize: "1.05rem",
        fontWeight: 600,
        color: "var(--fg)",
        zIndex: 30,
      }}
    >
      {text}
    </div>
  );
}
