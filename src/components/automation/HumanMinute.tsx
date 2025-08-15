"use client";

import React from "react";

interface HumanMinuteProps {
  onStart: (seconds?: number) => void;
  onEnd: () => void;
}

export default function HumanMinute({ onStart, onEnd }: HumanMinuteProps) {
  return (
    <div className="card">
      <div className="kicker mono">Human-Only Minute</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        <button 
          className="btn" 
          onClick={() => onStart(60)}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Start (60s)
        </button>
        <button 
          className="btn" 
          onClick={() => onStart(30)}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Start (30s)
        </button>
        <button 
          className="btn" 
          onClick={onEnd}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          End Now
        </button>
      </div>
      <p className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
        Mutes all agents so you can speak without interruptions. Shows a bumper.
      </p>
    </div>
  );
}
