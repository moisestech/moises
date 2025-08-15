"use client";

import React from "react";
import { Agent } from "../../data/script";
import { AGENT_COLORS } from "../../data/agents";

interface OrgChartProps {
  active?: Agent;
}

export default function OrgChart({ active }: OrgChartProps) {
  const nodes: Agent[] = ["Polly", "Grit", "Spec", "SysAdmin", "A404", "Fault"];
  
  return (
    <div className="card" style={{ padding: 12 }}>
      <div className="kicker mono">Synthetic Studio</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
        marginTop: 8,
      }}>
        {nodes.map((n) => (
          <div 
            key={n} 
            className="mono" 
            style={{
              padding: "8px 10px",
              border: "1px solid var(--line)",
              borderRadius: 10,
              background: active === n ? "rgba(0,255,208,.08)" : "transparent",
              boxShadow: active === n ? "0 0 0 2px #00ffd033" : "none",
              color: active === n ? "var(--accent)" : "var(--fg)",
              fontSize: "0.8rem",
              textAlign: "center",
              fontWeight: active === n ? 700 : 500,
            }}
          >
            [{n}]
          </div>
        ))}
      </div>
      <div 
        aria-hidden 
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--line), transparent)",
          margin: "10px 0",
        }}
      />
      <div className="mono" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
        Boxes = agents • Highlight = current speaker
      </div>
    </div>
  );
}
