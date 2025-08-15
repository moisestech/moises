"use client";

import React from "react";
import { AgentKey } from "../../data/agents";

interface CardPanelProps {
  onKill: (agent: AgentKey) => void;
  onClarify: () => void;
  onSpeed: () => void;
}

export default function CardPanel({ onKill, onClarify, onSpeed }: CardPanelProps) {
  return (
    <div className="card">
      <div className="kicker mono">Audience Cards</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        <button 
          className="mono" 
          style={{
            background: "#17ff82",
            color: "#0b0c10",
            padding: "0.5rem 0.8rem",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.8rem",
          }}
          onClick={onSpeed}
        >
          GREEN — Speed Up
        </button>
        <button 
          className="mono" 
          style={{
            background: "#ffe066",
            color: "#0b0c10",
            padding: "0.5rem 0.8rem",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.8rem",
          }}
          onClick={onClarify}
        >
          YELLOW — Clarify
        </button>
        <details>
          <summary 
            className="mono" 
            style={{
              background: "#ff6b6b",
              color: "#0b0c10",
              padding: "0.5rem 0.8rem",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.8rem",
              border: "none",
              listStyle: "none",
            }}
          >
            RED — Kill Switch (60s)
          </summary>
          <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(["Polly", "Grit", "Spec", "SysAdmin", "A404"] as AgentKey[]).map((a) => (
              <button 
                key={a} 
                className="mono" 
                onClick={() => onKill(a)}
                style={{
                  padding: "0.3rem 0.6rem",
                  fontSize: "0.7rem",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  color: "var(--fg)",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </details>
      </div>
      <p className="mono" style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
        Green speeds up • Yellow clarifies • Red pauses an agent for 60s
      </p>
    </div>
  );
}
