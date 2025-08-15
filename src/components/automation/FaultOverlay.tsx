"use client";

import React from "react";

interface FaultOverlayProps {
  text: string;
}

export default function FaultOverlay({ text }: FaultOverlayProps) {
  if (!text) return null;
  
  return (
    <div 
      className="mono" 
      aria-live="polite" 
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        top: 16,
        zIndex: 60,
        background: "rgba(20,18,32,.9)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "10px 12px",
        color: "var(--fault)",
        boxShadow: "0 18px 40px rgba(0,0,0,.45)",
        fontSize: "0.9rem",
        fontWeight: 600,
      }}
    >
      [FAULT] {text}
    </div>
  );
}
