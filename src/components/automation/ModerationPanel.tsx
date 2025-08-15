"use client";

import React, { useState } from "react";

interface ModerationPanelProps {
  onTrigger: (msg: string) => void;
}

export default function ModerationPanel({ onTrigger }: ModerationPanelProps) {
  const [msg, setMsg] = useState("Content redacted: safety rule triggered.");
  
  return (
    <div className="card">
      <div className="kicker mono">Moderation / Fault</div>
      <textarea 
        className="mono" 
        rows={2} 
        value={msg} 
        onChange={(e) => setMsg(e.target.value)}
        style={{
          width: "100%",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          color: "var(--fg)",
          padding: "8px",
          borderRadius: "6px",
          fontSize: "0.8rem",
          resize: "vertical",
        }}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button 
          className="btn" 
          onClick={() => onTrigger(msg)}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Trigger FAULT
        </button>
        <button 
          className="btn" 
          onClick={() => onTrigger("")}
          style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem" }}
        >
          Clear
        </button>
      </div>
      <p className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 8 }}>
        Use when sanitizing audience inputs or demonstrating safeguards.
      </p>
    </div>
  );
}
